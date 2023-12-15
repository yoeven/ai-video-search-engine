import { NextFetchEvent, NextResponse } from "next/server";
import { handleError } from "src/helpers/error";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { AuthMethods, HandlerConfig } from "src/types";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import {
  GetChatsDocument,
  GetChatsQuery,
  GetChatsQueryVariables,
  GetIndexesDocument,
  GetIndexesQuery,
  GetIndexesQueryVariables,
  InsertChatsDocument,
  InsertChatsMutation,
  InsertChatsMutationVariables,
} from "@graphql/generated/graphql";
import { createAIChatSession, sendMessageAIChatSession } from "src/helpers/jigsawstack";

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

    const chatRespPromise = gqlServerClient.request<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, {
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

    const indexRespPromise = gqlServerClient.request<GetIndexesQuery, GetIndexesQueryVariables>(GetIndexesDocument, {
      where: {
        id: {
          _eq: params.index_id,
        },
      },
    });

    const [chatResp, indexResp] = await Promise.all([chatRespPromise, indexRespPromise]);

    if (!indexResp.indexes?.[0]) {
      throw new Error("Index not found");
    }

    const index = indexResp.indexes?.[0];
    const chat = chatResp.chats?.[0];

    let chatSessionID: string | null = chat?.jigsawstack_chat_session_id || null;

    if (!chatSessionID) {
      const chatSession = await createAIChatSession();
      chatSessionID = chatSession.chat_session_id;

      const insertChatRespPromise = gqlServerClient.request<InsertChatsMutation, InsertChatsMutationVariables>(InsertChatsDocument, {
        objects: [
          {
            active: true,
            index_id: index.id,
            user_id: req.userClaims?.user_id,
            jigsawstack_chat_session_id: chatSessionID,
          },
        ],
      });

      con.waitUntil(insertChatRespPromise);
    }

    if (!chatSessionID) {
      throw new Error("Chat session failed to create");
    }

    const messageResp = await sendMessageAIChatSession(chatSessionID, params.message, index?.transcript || undefined);

    console.log(messageResp);

    return NextResponse.json(
      {
        success: true,
        response: messageResp.response,
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
