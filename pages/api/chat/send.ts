import { GetIndexesFullDocument, GetIndexesFullQueryVariables, GetIndexesFullQuery } from "@graphql/generated/graphql";
import { NextFetchEvent, NextResponse } from "next/server";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { handleError } from "src/helpers/error";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import { jigsaw } from "src/helpers/jigsawstack";
import { AuthMethods, HandlerConfig } from "src/types";

export const config = {
  runtime: "edge",
};

interface Params {
  index_id: string;
  message: string;
}

const handler = async (req: NextRequestCustom<Params>, con: NextFetchEvent) => {
  try {
    const params = req.params;

    const indexRespPromise = gqlServerClient.request<GetIndexesFullQuery, GetIndexesFullQueryVariables>(GetIndexesFullDocument, {
      where: {
        id: {
          _eq: params.index_id,
        },
      },
    });

    const [indexResp] = await Promise.all([indexRespPromise]);

    if (!indexResp.indexes?.[0]) {
      throw new Error("Index not found");
    }

    const index = indexResp.indexes?.[0];

    const messageResp = await jigsaw.prompt_engine.run_prompt_direct({
      prompt: `Video context:{context}\n\nQuery:{message}`,
      inputs: [
        {
          key: "context",
        },
        {
          key: "message",
        },
      ],
      input_values: {
        context: index.transcript,
        message: params.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        response: messageResp.result,
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
  method: ["POST"],
  authMethod: [AuthMethods.jwt_key],
  verifyProfile: true,
};

export default baseEdgeHandlerWrapper(handler, handlerConfig);
