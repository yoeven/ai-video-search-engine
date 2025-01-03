import { chunk, uniq } from "src/utils";
import { retry } from "ts-retry-promise";
import ytdl from "ytdl-core";
import ytpl from "ytpl";

const indexVideoBaseUrl = "http://localhost:3000/api/video";
// const indexVideoBaseUrl = "https://avse.vercel.app/api/video";

const indexVideo = async (videoURL: string) => {
  const resp = await fetch(`${indexVideoBaseUrl}?url=${videoURL}`);
  if (!resp.ok) {
    const error = await resp.json();
    throw new Error(error?.message || "Error indexing video client");
  }

  const videoIndexResp = await resp.json();
  return videoIndexResp;
};

const getVideosFromChannel = async (videoUrlFromChannel: string) => {
  const videoInfo = await ytdl.getInfo(videoUrlFromChannel, {
    lang: "en",
  });

  const channelId = videoInfo.player_response.videoDetails.channelId;
  const channelName = videoInfo.player_response.videoDetails.author;
  console.log("channelId", channelId);

  const resp = await Promise.all(
    new Array(1).fill(0).map((_, i) =>
      ytpl(channelId, {
        pages: Infinity,
        limit: Infinity,
      })
    )
  );

  let videoURLs = resp
    .map((r) => r.items)
    .flat()
    .map((v) => v.shortUrl);

  console.log("urls", videoURLs.length);

  videoURLs = uniq(videoURLs);

  console.log("u urls", videoURLs.length);

  console.log("Done channel: ", channelName);
  return { videoURLs, channelName };
};

const skipErrors = [
  "No captions found",
  "Video already indexed",
  "No english caption url found",
  "Status code: 410",
  "No such format found: highest",
];

const indexChannelVideos = async (videoUrlFromChannel: string) => {
  const chunkSize = 20;

  const { videoURLs, channelName } = await getVideosFromChannel(videoUrlFromChannel);
  console.log("total videos", videoURLs.length);
  const videoChunks = chunk(videoURLs, chunkSize);

  let chunkIndex = 0;

  for (const chunk of videoChunks) {
    const embedsReps = await Promise.allSettled(
      chunk.map((v) =>
        retry(() => indexVideo(v), {
          retries: 3,
          timeout: "INFINITELY",
          delay: 1000,
          backoff: "EXPONENTIAL",
          retryIf: (error) => {
            const shouldRetry = !skipErrors.includes(error?.message || "");

            if (shouldRetry) {
              console.log("retry error:", error?.message);
            }

            return shouldRetry;
          },
        })
      )
    );

    embedsReps.map((r, index) => console.log(index, " ", r.status, " ", chunk[index], " ", r.status == "rejected" ? r?.reason?.message : "Success"));

    const atLeastOneFailed = embedsReps.find((r) => r.status == "rejected" && !skipErrors.includes(r?.reason?.message || ""));

    if (atLeastOneFailed) {
      throw new Error("At least one video failed at chunk index " + chunkIndex);
    }

    console.log("completed chunk index", chunkIndex, "of", videoChunks.length);
    console.log("completed videos", chunkIndex * chunkSize, "of", videoURLs.length);

    chunkIndex++;
  }

  console.log("Completed all videos: ", channelName);
};

indexChannelVideos("https://www.youtube.com/watch?v=R2fAYn8R318&ab_channel=YCombinator");

// How to run:
// 1. start nextjs server `yarn dev`
// 2. paste a youtube video from the channel you would like to index in the above function
// 3. run `tsx admin/massUploadVideos.ts` in another terminal window
// 4. wait for the script to finish
