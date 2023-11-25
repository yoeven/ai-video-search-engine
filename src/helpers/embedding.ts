import { TokenTextSplitter } from "langchain/text_splitter";
import { pipeline } from "@xenova/transformers";

export const embedText = async (text: string) => {
  const cleanText = text.replace(/(\r\n|\n|\r)/gm, " ").trim();

  console.log(cleanText);

  const splitter = new TokenTextSplitter({
    encodingName: "cl100k_base",
    chunkSize: 500,
    chunkOverlap: 0,
  });

  const textSplits = await splitter.splitText(cleanText);
  console.log(textSplits);
  console.log("num of splits", textSplits.length);

  const pipe = await pipeline("feature-extraction", "Supabase/gte-small");

  const embeddingPromise = textSplits.map((t) =>
    pipe(t, {
      pooling: "mean",
      normalize: true,
    })
  );

  const resp = await Promise.all(embeddingPromise);

  const embeddings = resp.map((r) => Array.from(r.data));

  console.log(embeddings.length, embeddings[0].length);

  return {
    embeddings,
    textSplits,
    embeddingSize: embeddings[0].length,
  };
};
