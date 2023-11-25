// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import { convertXML } from "simple-xml-to-json";
import * as entities from "entities";
import { embedText } from "src/helpers/embedding";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import {
  GetIndexesDocument,
  GetIndexesQuery,
  GetIndexesQueryVariables,
  InsertIndexDocument,
  InsertIndexMutation,
  InsertIndexMutationVariables,
} from "@graphql/generated/graphql";

interface Params {
  url: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = req.query as any as Params;
    const url = new URL(body.url);
    console.log("url", url);
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

    const videoInfo = await ytdl.getInfo(cleanURL, {
      lang: "en",
    });

    const highestQualityVideo = ytdl.chooseFormat(videoInfo.formats, {
      filter: "video",
      quality: "highest",
    });

    const captionTracks = videoInfo?.player_response?.captions?.playerCaptionsTracklistRenderer?.captionTracks || [];

    const title = videoInfo?.videoDetails?.title;
    const description = videoInfo?.videoDetails.description;
    const durationSeconds = videoInfo?.videoDetails?.lengthSeconds ? parseInt(videoInfo?.videoDetails?.lengthSeconds) : 0;
    const tags = videoInfo?.videoDetails?.keywords || [];

    const width = highestQualityVideo.width;
    const height = highestQualityVideo.height;

    let captionTimeStamped: any[] = [];
    let captionText: string;
    if (captionTracks.length > 0) {
      const englishCaptions = captionTracks.filter((c) => c.languageCode.includes("en"));
      const selectedCaption =
        englishCaptions.find((c) => !c.name.simpleText.includes("auto-generated")) ||
        englishCaptions.find((c) => c.name.simpleText.includes("auto-generated")) ||
        captionTracks?.[0];

      if (!selectedCaption) {
        throw new Error("No english caption found");
      }

      const captionUrl = selectedCaption.baseUrl;

      const captionResp = await fetch(captionUrl);
      const captionXML = await captionResp.text();
      const captionsTimeStamped = convertXML(captionXML).transcript.children;
      captionTimeStamped = captionsTimeStamped.map((c: any) => ({
        text: entities.decodeHTML(entities.decodeXML(c.text.content)),
        start: parseFloat(c.text.start),
        end: parseFloat(c.text.start) + parseFloat(c.text.dur),
        dur: parseFloat(c.text.dur),
      }));

      captionText = captionTimeStamped.map((c) => c.text).join(" ");
      captionText = captionText.replace(/(\r\n|\n|\r)/gm, " ").trim();
    } else {
      throw new Error("No captions found");
    }

    if (!captionText || !captionTimeStamped) {
      throw new Error("No captions found");
    }

    const titleClean = title.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const descriptionClean = description?.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const tagsClean = tags.map((t) => t.replace(/(\r\n|\n|\r)/gm, " ").trim()).join(", ");

    const textForEmbedding = `Title: ${titleClean}\nDescription: ${descriptionClean}\nTags: ${tagsClean}\nTranscription: ${captionText}`;

    const embeddings = await embedText(textForEmbedding);

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
        embeddings: {
          data: embeddings.embeddings.map((e, index) => ({
            embedding: JSON.stringify(e),
            content: embeddings.textSplits[index],
          })),
        },
      },
    });

    res.status(200).json({ video_id: videoId, captionTimeStamped, captionText });
  } catch (error: any) {
    res.status(400).json({ error: error?.message });
  }
};

export default handler;
