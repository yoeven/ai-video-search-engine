# AI Video Search Engine (AVSE)

## A video search engine powered by the latest tools in AI

## Why?
With the rise of short form content with TikTok and Youtube. A lot more knowledge is in videos than ever before. Finding specific answers within millions of videos can be difficult for any one person to go through. So the question is if there is Google that indexes text on website making it easier for contextualise that content based on your question, why is there no Google that indexes video content making it easier for users to find answers within them. So I built this as a small way of taking that step towards building a search engine for videos.

## Tech Stack
- Supbase (PostgreSQL, PG_Vector, Auth)
- Hasura (GraphQL layer, permissions)
- Fly (Hosting of Hasura)
- JigsawStack (Summary AI, Chat AI)
- Vercel (NextJS hosting, Serverless functions)

## How it works?

### Storing of videos
- Video transcription is extracted from youtube video
- Transcriptions is chunked along with timestamp based on https://huggingface.co/Supabase/gte-small dimension size
- Stored in postgres DB with use of pg_vector extension and indexing

### Searching
- Vector cosine search across the db based on question to return the relavant results
- Each video in the result will perform a second search to find related chunks of video to the question
- The chunks will be mapped back to the timestamped transcript to play the relavant clip of the video

### Summary & Chat
- Transcription of video will be sent to JigsawStack API for summary in both point form and text
- Chat sessions will be created and managed by JigsawStack API, related chunks of the video will be sent to chat session based on questions

## Things to note to host it yourself
- You'll need a paid Supabase & Fly.io account if you're planning to index thousands to millions of videos
- `admin/config/fly.toml` Consist of configs needed to deploy Hasura to fly
- `admin/migration` Migration dump you can use to recreate the schema through Hasura CLI
- `admin/indexChannelVideos.ts` Script to index large number of videos locally with youtube channels
- `.env.example` Keys needed to run to project

## FAQ
Doesn't youtube do this?
- Not really, Youtube doesn't search the transcribed audio of the video but instead relies on the written content of the uploader such as title, description, tags. While all the audio content goes unindexed.

How's this stack gonna handle millions of videos?
- It can handle millions but maybe not billions/trillions with this current setup. Which requires more replicas, instances and especially $

## What's next?
- Add TikTok as a video source
- Add https://replicate.com/vaibhavs10/incredibly-fast-whisper to transcribe audio
- Improve query performance significantly
- Page to view all active chats