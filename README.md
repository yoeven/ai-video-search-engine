
# AVSE (AI Video Search Engine)

## Tech stack used

- Supbase (PostgreSQL, PG_Vector, Auth)
- Hasura (GraphQL layer, permissions)
- Fly (Hosting of Hasura)
- JigsawStack (Summary AI, Chat AI)
- Vercel (NextJS hosting, Serverless functions)

## Things to note to host it yourself
- You'll need a paid Supabase & Fly.io account if you're planning to index thousands to millions of videos
- `admin/config/fly.toml` Consist of configs needed to deploy Hasura to fly
- `admin/migration` Migration dump you can use to recreate the schema through Hasura CLI
- `admin/indexChannelVideos.ts` Script to index large number of videos locally with youtube channels
- `.env.example` Keys needed to run to project



