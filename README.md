# AI Video Search Engine (AVSE)

## A video search engine powered by the latest tools in AI

## Why?
With the rise of short form content with TikTok and Youtube. A lot more knowledge is in videos than ever before. Finding specific answers within millions of videos can be difficult for any one person to go through. So the question is if there is Google that indexes text on website making it easier to find based on the context of on your question, why is there no Google that indexes video content making it easier for users to find answers within them.

So I built this to showcase that it's very much possible with the technology and infrastructure that is readily available.

## Tech Stack
- [Supabase](https://supabase.com/) (PostgreSQL, PG_Vector, Auth)
- [Hasura](https://hasura.io/) (GraphQL layer, permissions)
- [Fly](https://fly.io/) (Hosting of Hasura)
- [JigsawStack](https://jigsawstack.com/) ([Summary AI](https://jigsawstack.com/ai-summary), [Prompt engine AI](https://jigsawstack.com/prompt-engine), [Embedding model](https://jigsawstack.com/embedding))
- [Vercel](https://vercel.com/home) (NextJS hosting, Serverless functions)

Note: The previous version used a smaller embedding model that only supports english but can be easily ran in your serverless function. Check out `archive/v1` branch for the older version.

## How it works?

### Storing of videos
- Video transcription is extracted from youtube video
- Other elements of the video like thumbnail, description, title and more is extracted
- Transcription and other data is passed to [JigsawStack's multimodal embedding model](https://jigsawstack.com/embedding) to generate vector embedding of all content
- Transcriptions is chunked along with timestamp based on https://huggingface.co/Supabase/gte-small dimension size
- Stored in [PostgresDB (Supabase)](https://supabase.com/docs/guides/ai) with use of pg_vector extension and indexing

### Searching
- Vector cosine search across the db based on question to return the relevant results
- Each video in the result will perform a second search to find related chunks of video to the question
- The chunks will be mapped back to the timestamped transcript to play the relevant clip of the video

### Summary & Chat
- Transcription of video will be sent to JigsawStack API for summary in both point form and text
- Chat sessions are temporary and aren't stored which is managed by [JigsawStack's Prompt Engine API](https://jigsawstack.com/prompt-engine)

## Things to note to host it yourself
- You'll need a paid Supabase & Fly.io account if you're planning to index thousands to millions of videos
- `admin/config/fly.toml` Consist of configs needed to deploy Hasura to fly
- `admin/migration` Migration dump you can use to recreate the schema through Hasura CLI
- `hasura init migration --endpoint <hasuraurl.fly.app> --admin-secret <admin_secret>` To update migration folder in `admin`
- `admin/indexChannelVideos.ts` Script to index large number of videos locally with youtube channels
- `.env.example` Keys needed to run to project
- `admin/reindex.ts` can be used to re-generate the vector embedding for a different embedding model for all video indexes stored

## FAQ
Doesn't youtube do this?
- Not really, Youtube doesn't search the transcribed audio of the video but instead relies on the written content of the uploader such as title, description, tags. While all the audio content goes un-indexed.

How's this stack gonna handle millions of videos?
- It can handle millions but maybe not billions/trillions with this current setup. Which requires more replicas, instances and especially $

What happened to the previous version
- The previous version used `gte-small` embedding model which had a pretty small context length and only supports English with a lower retrieval score. You can find the older version in a branch `archive/v1`. The current version uses a newer model with support for over 75+ languages and has a larger context size of 8000+ allowing for smaller embedding outputs and a smaller database.

## What's next?
- Add TikTok as a video source
- Improve query speed significantly