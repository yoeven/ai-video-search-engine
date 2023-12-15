import { NextFetchEvent, NextResponse } from "next/server";
import { handleError } from "src/helpers/error";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { AuthMethods, ChatMessage, HandlerConfig } from "src/types";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import { GetChatsDocument, GetChatsQuery, GetChatsQueryVariables } from "@graphql/generated/graphql";
import { getAIChatMessages } from "src/helpers/jigsawstack";

export const config = {
  runtime: "edge",
};

interface Params {
  index_id: string;
}

const handler = async (req: NextRequestCustom<Params>, con: NextFetchEvent) => {
  try {
    const params = req.params;

    const resp = await gqlServerClient.request<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, {
      where: {
        index_id: {
          _eq: params.index_id,
        },
        user_id: {
          _eq: req.userClaims?.user_id,
        },
        active: {
          _eq: true,
        },
      },
    });

    const chat = resp.chats?.[0];

    let messages: ChatMessage[] = [];

    if (chat?.jigsawstack_chat_session_id) {
      const messagesResp = await getAIChatMessages(chat.jigsawstack_chat_session_id);
      const messagesData = messagesResp.list.reverse();
      messages = messagesData.map((m: any) => ({
        message: m.message,
        role: m.role,
        created_at: m.created_at,
        id: m.id,
      }));
    }

    return NextResponse.json(
      {
        success: true,
        messages,
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
