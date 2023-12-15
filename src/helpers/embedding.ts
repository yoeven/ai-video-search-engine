import { TokenTextSplitter } from "langchain/text_splitter";
import { Pipeline } from "@xenova/transformers";
import { TextTimeStamped } from "src/types";
import { splitTextTimestampedByChar } from "src/utils";

const oneTokenToChar = 3;
const tokens = 500;
const maxChar = oneTokenToChar * tokens;

const tokenSplitter = new TokenTextSplitter({
  encodingName: "cl100k_base",
  chunkSize: tokens,
  chunkOverlap: 0,
});

export const embedTextTimeStamped = async (textSets: TextTimeStamped[], pipe: Pipeline) => {
  const textSplits = splitTextTimestampedByChar(textSets, maxChar);

  const testSplitAccuracies = await Promise.all(textSplits.map((ts) => tokenSplitter.splitText(ts.content)));

  for (const testSplitAccuracy of testSplitAccuracies) {
    if (testSplitAccuracy.length > 1) {
      throw new Error("Splitter accuracy is not 100%");
    }
  }

  // const pipe = await pipeline("feature-extraction", "Supabase/gte-small");

  const embeddingPromise = textSplits.map((t) =>
    pipe(t.content, {
      pooling: "mean",
      normalize: true,
    })
  );

  const resp = await Promise.all(embeddingPromise);

  const embeddings = resp.map((r) => Array.from(r.data));

  console.log("Sets: ", embeddings.length, "Length of single set: ", embeddings[0].length);

  const embeddingSets = embeddings.map((e, index) => ({
    embedding: e,
    content: textSplits[index].content,
    embedding_size: e.length,
    start: textSplits[index].start,
    end: textSplits[index].end,
    dur: textSplits[index].dur,
  }));

  return embeddingSets;
};

export const embedText = async (text: string, pipe: Pipeline) => {
  const cleanText = text.replace(/(\r\n|\n|\r)/gm, " ").trim();

  console.log(cleanText);

  const textSplits = await tokenSplitter.splitText(cleanText);
  console.log(textSplits);
  console.log("num of splits", textSplits.length);

  // const pipe = await pipeline("feature-extraction", "Supabase/gte-small");

  const embeddingPromise = textSplits.map((t) =>
    pipe(t, {
      pooling: "mean",
      normalize: true,
    })
  );

  const resp = await Promise.all(embeddingPromise);

  const embeddings = resp.map((r) => Array.from(r.data));

  console.log("Sets: ", embeddings.length, "Length of single set: ", embeddings[0].length);

  const embeddingSets = embeddings.map((e, index) => ({
    embedding: e,
    content: textSplits[index],
    embedding_size: e.length,
    start: null,
    end: null,
    dur: null,
  }));

  return embeddingSets;
};
