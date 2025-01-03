import ytdl from "@distube/ytdl-core";
import {
  GetIndexesDocument,
  GetIndexesQuery,
  GetIndexesQueryVariables,
  InsertIndexDocument,
  InsertIndexMutation,
  InsertIndexMutationVariables,
} from "@graphql/generated/graphql";
import * as entities from "entities";
import { jwtVerify } from "jose";
import type { NextApiRequest, NextApiResponse } from "next";
import { convertXML } from "simple-xml-to-json";
import { embedJSS } from "src/helpers/embedding";
import { HandledError } from "src/helpers/error";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import { TextTimeStamped } from "src/types";
import { getYTThumbnail } from "src/utils";

interface Params {
  url: string;
}

const avgSecondsPerChar = 0.1578947368;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (process.env.NODE_ENV === "production") {
      const token = req.headers?.authorization?.replace("Bearer ", "") || null;

      if (!token) {
        throw new HandledError("Invalid token", undefined, 401);
      }

      const jwtPayload = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as any;

      let hasuraClaims = jwtPayload?.app_metadata?.["hasura"];

      if (!hasuraClaims) {
        throw new HandledError("Invalid token", undefined, 401);
      }
    }

    const body = req.query as any as Params;
    const url = new URL(body.url);
    let source: "youtube" | "tiktok";
    let videoId: string | undefined;
    let cleanURL: string | undefined;

    switch (true) {
      case url.href.includes("youtube.com/watch?v=") || url.href.includes("youtu.be/") || url.href.includes("youtube.com/shorts/"):
        source = "youtube";
        videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
        cleanURL = `https://youtu.be/${videoId}`;
        break;
      case url.href.includes("tiktok.com/@") && url.href.includes("/video/"):
        source = "tiktok";
        videoId = url.pathname.split("/").pop();
        cleanURL = `https://www.tiktok.com${url.pathname}`;
        break;
      default:
        throw new Error("Invalid URL check");
    }

    if (!videoId || !cleanURL) {
      throw new Error("Invalid URL");
    }

    const resp = await gqlServerClient.request<GetIndexesQuery, GetIndexesQueryVariables>(GetIndexesDocument, {
      where: {
        video_id: {
          _eq: videoId,
        },
      },
    });

    if (resp.indexes.length > 0) {
      const index = resp.indexes[0];

      if (!index.active) {
        if (index.status === "processing") {
          throw new Error("Video is still processing");
        } else if (index.status === "completed") {
          throw new Error("Video is already indexed and not active");
        } else {
          throw new Error("Video indexing failed");
        }
      }

      throw new Error("Video already indexed");
    }

    console.log("clean", cleanURL);

    const [videoInfo, thumbnailURL] = await Promise.all([
      ytdl.getInfo(cleanURL, {
        lang: "en",
      }),
      getYTThumbnail(videoId),
    ]);

    console.log("thumbnailURL", thumbnailURL);

    let formatFilter = videoInfo.formats.filter((f) => f.hasVideo && f?.width && f?.height);
    formatFilter = formatFilter.filter((f) => f.qualityLabel);
    formatFilter = formatFilter.sort((a, b) => {
      return parseInt(b.qualityLabel.replace("p", "")) - parseInt(a.qualityLabel.replace("p", ""));
    });

    const highestQualityVideo = formatFilter?.[0];

    const captionTracks = videoInfo?.player_response?.captions?.playerCaptionsTracklistRenderer?.captionTracks || [];
    const translationLanguages = videoInfo?.player_response?.captions?.playerCaptionsTracklistRenderer?.translationLanguages || [];

    const title = videoInfo?.videoDetails?.title;
    const description = videoInfo?.videoDetails.description;
    const durationSeconds = videoInfo?.videoDetails?.lengthSeconds ? parseInt(videoInfo?.videoDetails?.lengthSeconds) : 0;
    const tags = videoInfo?.videoDetails?.keywords || [];

    const width = highestQualityVideo?.width;
    const height = highestQualityVideo?.height;

    let captionTimeStamped: TextTimeStamped[] = [];
    let captionText: string;
    if (captionTracks.length > 0) {
      let captionUrl: string | null = null;
      const englishCaptions = captionTracks.filter((c) => c.languageCode.includes("en"));
      const selectedCaption =
        englishCaptions.find((c) => !c.name.simpleText.includes("auto-generated")) ||
        englishCaptions.find((c) => c.name.simpleText.includes("auto-generated"));

      if (selectedCaption) {
        captionUrl = selectedCaption.baseUrl;
      } else {
        const englishTranslation = translationLanguages.find((t) => t.languageCode == "en");
        if (englishTranslation) {
          console.log("translated caption url");
          captionUrl = captionTracks?.[0].baseUrl + "&tlang=en";
        }
      }

      console.log(videoId, " ,captionUrl", captionUrl);

      if (!captionUrl) throw new Error("No english caption url found");

      const captionResp = await fetch(captionUrl);
      const captionXML = await captionResp.text();
      let captionsTimeStamped = convertXML(captionXML).transcript.children;

      captionsTimeStamped = captionsTimeStamped.filter((c: any) => c?.text?.content?.length > 0);

      captionTimeStamped = captionsTimeStamped.map((c: any) => ({
        content: entities
          .decodeHTML(entities.decodeXML(c.text.content))
          .replace(/(\r\n|\n|\r)/gm, " ")
          .trim(),
        start: parseFloat(c.text.start),
        end: parseFloat(c.text.start) + parseFloat(c.text.dur),
        dur: parseFloat(c.text.dur),
      }));

      captionText = captionTimeStamped.map((c) => c.content).join(" ");
      captionText = captionText.replace(/(\r\n|\n|\r)/gm, " ").trim();
    } else {
      throw new Error(`No captions found`);
    }

    if (!captionText || !captionTimeStamped) {
      throw new Error("No captions found");
    }

    const titleClean = title.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const descriptionClean = description?.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const tagsClean = tags.map((t) => t.replace(/(\r\n|\n|\r)/gm, " ").trim()).join(", ");

    const textForEmbedding = `Title: ${titleClean}\nDescription: ${descriptionClean}\nTags: ${tagsClean}`;

    console.log("Embedding: ", videoId);

    const [videoInfoEmbedding, captionEmbeddingSets] = await Promise.all([
      thumbnailURL
        ? embedJSS({
            text: textForEmbedding,
            url: thumbnailURL,
            type: "image",
          })
        : {
            embedding: [],
          },
      embedJSS({
        file_content: captionTimeStamped.map((c) => ({
          text: c.content,
          timestamp: [c.start, c?.end ? c.end : c.start + c.content.length * avgSecondsPerChar],
        })),
        type: "audio",
      }),
    ]);

    const embeddingSets = [
      ...videoInfoEmbedding.embeddings.map((e: any) => ({
        embedding: JSON.stringify(e),
        content: textForEmbedding,
        start_time: null,
        end_time: null,
        duration_time: null,
      })),
      ...captionEmbeddingSets.embeddings.map((e: any, i: number) => ({
        embedding: JSON.stringify(e),
        content: captionEmbeddingSets.chunks[i].text,
        start_time: captionEmbeddingSets.chunks[i].timestamp[0],
        end_time: captionEmbeddingSets.chunks[i].timestamp[1],
        duration_time: captionEmbeddingSets.chunks[i].timestamp[1] - captionEmbeddingSets.chunks[i].timestamp[0],
      })),
    ];

    console.log("upload to db");

    try {
      await gqlServerClient.request<InsertIndexMutation, InsertIndexMutationVariables>(InsertIndexDocument, {
        object: {
          video_id: videoId,
          video_url: cleanURL,
          video_source: source,
          title,
          description,
          duration_seconds: durationSeconds,
          tags,
          transcript_timestamped: captionTimeStamped,
          transcript: captionText,
          active: true,
          status: "completed",
          nsfw: false,
          width,
          height,
          embeddings_gte: {
            data: embeddingSets,
          },
        },
      });
    } catch (error: any) {
      console.error("error", error);
      console.error("error", error?.message);
      throw new Error("Upload to db failed");
    }

    res.status(200).json({ video_id: videoId });
  } catch (error: any) {
    console.log("error", error);
    console.log(error?.message);
    res.status(400).json({ message: error?.message, error: true });
  }
};

export default handler;
