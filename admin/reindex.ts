import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import fs from "node:fs";
import {
  GetIndexesDocument,
  GetIndexesQuery,
  GetIndexesQueryVariables,
  InsertEmbeddingsGteDocument,
  InsertEmbeddingsGteMutation,
  InsertEmbeddingsGteMutationVariables,
} from "@graphql/generated/graphql";
import { GraphQLClient } from "graphql-request";
import ky, { HTTPError } from "ky";
import { chunk, getYTThumbnail } from "src/utils";

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
      timeout: false,
    }),
  cache: "no-cache",
});

const embed = async (params: any) => {
  const resp = await ky
    .post<any>("https://api.jigsawstack.com/v1/embedding", {
      json: params,
      headers: {
        "x-api-key": process.env.JIGSAWSTACK_KEY,
        "x-jigsaw-no-request-log": "true",
      },
      timeout: false,
    })
    .json()
    .catch(async (err: HTTPError) => {
      const message = (await err?.response?.json<any>())?.message || err.message;
      if (message) {
        console.error(`Error embedding: ${message}`);
        throw new Error(message);
      } else {
        throw err;
      }
    });

  return resp;
};

const limit = 200;
const avgSecondsPerChar = 0.1578947368;

const redo = async () => {
  try {
    console.log("Fetching indexes");
    const indexes = await gqlServerClient.request<GetIndexesQuery, GetIndexesQueryVariables>(GetIndexesDocument, {
      where: {
        embeddings_gte_aggregate: {
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
      //@ts-ignore Add the fields back in the graphql file before running
      const { id, title, description, tags, video_id, transcript_timestamped } = index;

      // console.log("Processing: ", title, video_id, id);

      const transcriptMapped = transcript_timestamped
        .filter((t: any) => t?.content)
        .map((t: any) => ({
          text: t.content,
          timestamp: [t.start, t?.end ? t.end : t.start + t.content.length * avgSecondsPerChar],
        }));

      const transcriptMappedSets = chunk(transcriptMapped, 10000);

      const thumbnail = await getYTThumbnail(video_id);
      // console.log("Video thumbnail: ", thumbnail);

      // const storyboardImage = videoInfo.videoDetails.storyboards?.[0]?.templateUrl;

      const titleClean = title?.replace(/(\r\n|\n|\r)/gm, " ").trim();
      const descriptionClean = description?.replace(/(\r\n|\n|\r)/gm, " ").trim();
      const tagsClean = tags.map((t: string) => t.replace(/(\r\n|\n|\r)/gm, " ").trim()).join(", ");

      const textForEmbedding = `Title: ${titleClean}\nDescription: ${descriptionClean}\nTags: ${tagsClean}`;

      console.log("Embedding: ", id);

      const [videoInfoEmbedding, ...captionEmbeddingSets] = await Promise.all([
        thumbnail
          ? embed({
              type: "image",
              url: thumbnail,
              text: textForEmbedding,
            })
          : null,
        ...transcriptMappedSets.map((t) =>
          embed({
            type: "audio",
            file_content: t,
          })
        ),
      ]).catch((e) => {
        console.error(`Error for ${id}: `, e);
        fs.writeFileSync(
          "image_e.json",
          JSON.stringify(
            {
              type: "image",
              url: thumbnail,
              text: textForEmbedding,
            },
            null,
            2
          )
        );
        fs.writeFileSync(
          "audio_e.json",
          JSON.stringify(
            {
              type: "audio",
              file_content: transcriptMapped,
            },
            null,
            2
          )
        );
        throw e;
      });

      console.log("Embedding completed: ", id);

      const captionEmbedding = captionEmbeddingSets.map((c) => c.embeddings).flat();
      const captionEmbeddingTimestampChunks = captionEmbeddingSets.map((c) => c.chunks).flat();

      const embeddingSets = [
        ...(videoInfoEmbedding
          ? videoInfoEmbedding.embeddings.map((e: any) => ({
              index_id: id,
              embedding: JSON.stringify(e),
              content: textForEmbedding,
              start_time: null,
              end_time: null,
              duration_time: null,
            }))
          : []),
        ...captionEmbedding.map((e: any, index: number) => ({
          index_id: id,
          embedding: JSON.stringify(e),
          content: captionEmbeddingTimestampChunks[index].text,
          start_time: captionEmbeddingTimestampChunks[index].timestamp[0],
          end_time: captionEmbeddingTimestampChunks[index].timestamp[1],
          duration_time: captionEmbeddingTimestampChunks[index].timestamp[1] - captionEmbeddingTimestampChunks[index].timestamp[0],
        })),
      ];

      console.log("Inserting DB: ", id);

      await gqlServerClient
        .request<InsertEmbeddingsGteMutation, InsertEmbeddingsGteMutationVariables>(InsertEmbeddingsGteDocument, {
          objects: embeddingSets,
        })
        .catch((e) => {
          console.error(`Error for ${id}: `, e);
          fs.writeFileSync("error.json", JSON.stringify(e, null, 2));
          throw e;
        });

      console.log("Completed: ", id);
    });

    // const promises = indexMap.map((p) =>
    //   retry(() => p, {
    //     retries: 3,
    //     timeout: "INFINITELY",
    //     delay: 1000,
    //     backoff: "EXPONENTIAL",
    //     logger: console.log,
    //   })
    // );

    const promiseResults = await Promise.allSettled(indexMap);

    console.log("rejected: ", promiseResults.filter((p) => p.status === "rejected").length);
    console.log("fulfilled: ", promiseResults.filter((p) => p.status === "fulfilled").length);

    console.log(`Completed ${indexMap.length} total indexes`);

    await redo();

    return indexes.indexes.length === limit || !(indexes.indexes.length == 0);
  } catch (error) {
    console.error("Error: ", error);
  }

  return false;
};

const run = async () => {
  let loop = false;

  do {
    loop = await redo();
  } while (loop);
};

run();
