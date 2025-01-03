import { JigsawStack } from "jigsawstack";

export const jigsaw = JigsawStack({
  apiKey: process?.env?.JIGSAWSTACK_KEY || process?.env?.NEXT_PUBLIC_JIGSAWSTACK_KEY || "",
});
