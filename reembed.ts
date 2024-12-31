import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import {
  GetIndexesDocument,
  GetIndexesQuery,
  GetIndexesQueryVariables,
  InsertEmbeddingsJssDocument,
  InsertEmbeddingsJssMutation,
  InsertEmbeddingsJssMutationVariables,
} from "@graphql/generated/graphql";
import ytdl from "@distube/ytdl-core";
import { GraphQLClient } from "graphql-request";
import ky from "ky";
import fs from "node:fs";

const hasuraEndPoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT_URL || "";
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

const gqlServerClient = new GraphQLClient(hasuraEndPoint, {
  headers: {
    "x-hasura-admin-secret": hasuraAdminSecret,
    "content-type": "application/json",
  },
  fetch: (r, options) =>
    ky(r, {
      ...options,
      timeout: 60000,
    }),
  cache: "no-cache",
});

const embed = async (params: any) => {
  const resp = await ky
    .post<any>("https://api.jigsawstack.com/v1/embedding", {
      json: params,
      headers: {
        "x-api-key": process.env.JIGSAWSTACK_KEY,
      },
      timeout: 60000,
    })
    .json();

  return resp;
};

const limit = 50;

const redo = async () => {
  try {
    const indexes = await gqlServerClient.request<GetIndexesQuery, GetIndexesQueryVariables>(GetIndexesDocument, {
      where: {
        embeddings_jss_aggregate: {
          count: {
            predicate: {
              _eq: 0,
            },
          },
        },
      },
      limit: limit,
    });

    console.log("Indexes to embed: ", indexes.indexes.length);

    const indexMap = indexes.indexes.map(async (index) => {
      const { id, title, description, tags, video_id, transcript_timestamped } = index;

      console.log("Processing: ", title, video_id, id);

      const transcriptMapped = transcript_timestamped.map((t: any) => ({
        text: t.content,
        timestamp: [t.start, t.end],
      }));

      let videoInfo: ytdl.videoInfo;
      try {
        videoInfo = await ytdl.getInfo(`https://youtu.be/${video_id}`, {
          lang: "en",
        });
      } catch (error) {
        console.error("Error fetching video info: ", id, error);
        return null;
      }

      const thumbnail = videoInfo.videoDetails.thumbnails[videoInfo.videoDetails.thumbnails.length - 1].url;

      console.log("Video thumbnail: ", thumbnail);
      // const storyboardImage = videoInfo.videoDetails.storyboards?.[0]?.templateUrl;

      const titleClean = title?.replace(/(\r\n|\n|\r)/gm, " ").trim();
      const descriptionClean = description?.replace(/(\r\n|\n|\r)/gm, " ").trim();
      const tagsClean = tags.map((t: string) => t.replace(/(\r\n|\n|\r)/gm, " ").trim()).join(", ");

      const textForEmbedding = `Title: ${titleClean}\nDescription: ${descriptionClean}\nTags: ${tagsClean}`;

      console.log("Embedding: ", id);

      const [videoInfoEmbedding, captionEmbeddingSets] = await Promise.all([
        embed({
          type: "image",
          url: thumbnail,
          text: textForEmbedding,
        }),

        embed({
          type: "audio",
          file_content: transcriptMapped,
        }),
      ]).catch((e) => {
        console.error(`Error for ${id}: `, e);
        throw e;
      });

      console.log("Embedding completed: ", id);

      const embeddingSets = [
        ...videoInfoEmbedding.embeddings.map((e: any) => ({
          index_id: id,
          embedding: JSON.stringify(e),
          content: textForEmbedding,
          start_time: null,
          end_time: null,
          duration_time: null,
        })),
        ...captionEmbeddingSets.embeddings.map((e: any, index: number) => ({
          index_id: id,
          embedding: JSON.stringify(e),
          content: captionEmbeddingSets.chunks[index].text,
          start_time: captionEmbeddingSets.chunks[index].timestamp[0],
          end_time: captionEmbeddingSets.chunks[index].timestamp[1],
          duration_time: captionEmbeddingSets.chunks[index].timestamp[1] - captionEmbeddingSets.chunks[index].timestamp[0],
        })),
      ];

      console.log("Inserting DB: ", id);

      await gqlServerClient
        .request<InsertEmbeddingsJssMutation, InsertEmbeddingsJssMutationVariables>(InsertEmbeddingsJssDocument, {
          objects: embeddingSets,
        })
        .catch((e) => {
          console.error(`Error for ${id}: `, e);
          fs.writeFileSync("error.json", JSON.stringify(e, null, 2));
          throw e;
        });

      console.log("Completed: ", id);
    });

    await Promise.all(indexMap);

    console.log(`Completed ${indexMap.length} indexes`);

    if (indexes.indexes.length === limit) {
      await redo();
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

redo();
