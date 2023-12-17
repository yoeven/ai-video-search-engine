import { NextFetchEvent, NextResponse } from "next/server";
import { handleError } from "src/helpers/error";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { AuthMethods, HandlerConfig } from "src/types";

export const config = {
  runtime: "edge",
};

interface Params {
  url: string;
}

const handler = async (req: NextRequestCustom<Params>, con: NextFetchEvent) => {
  try {
    const params = req.params;

    const baseURL = req.headers.get("x-forwarded-proto") + "://" + req.headers.get("host");

    const resp = await fetch(`${baseURL}/api/video/index_video?url=${params.url}`, {
      headers: {
        "Content-Type": "application/json",
        "x-admin-api-key": process.env.ADMIN_KEY!,
      },
    });

    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error?.message || "Error indexing video client");
    }

    const videoIndexResp = await resp.json();

    return NextResponse.json(
      {
        success: true,
        ...videoIndexResp,
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
  authMethod: [AuthMethods.jwt_key],
  verifyProfile: true,
};

export default baseEdgeHandlerWrapper(handler, handlerConfig);
