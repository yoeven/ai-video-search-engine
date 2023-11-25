import { NextResponse } from "next/server";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { handleError } from "src/helpers/error";
import { HandlerConfig } from "src/types";

export const config = {
  runtime: "edge",
};

const handler = async (
  req: NextRequestCustom<{
    query: string;
  }>
) => {
  try {
    const { query } = req.params;

    const resp = await fetch(`https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=us&ds=yt&q=${query}&callback=json`);

    const jsonUnclean = await resp.text();

    const jsonString = jsonUnclean.replace("json(", "").replace(")", "").replace("json && ", "");
    const json = JSON.parse(jsonString);
    let suggestions = json?.[1] || [];
    suggestions = suggestions.map((s: any) => s[0]);

    return NextResponse.json(
      {
        success: true,
        suggestions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error);
  }
};

export const handlerConfig: HandlerConfig = {
  method: ["GET"],
  //   validationSchema: CurrencyFormatterSchema,
  skipAuth: true,
};

export default baseEdgeHandlerWrapper(handler, handlerConfig);
