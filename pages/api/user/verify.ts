import { InsertUserDocument, InsertUserMutation, InsertUserMutationVariables } from "@graphql/generated/graphql";
import { jwtVerify } from "jose";
import { NextFetchEvent, NextResponse } from "next/server";
import baseEdgeHandlerWrapper, { NextRequestCustom } from "src/helpers/baseEdgeHandlerWrapper";
import { HandledError, handleError } from "src/helpers/error";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import { supabaseAdmin } from "src/helpers/supabase";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequestCustom, context: NextFetchEvent) => {
  try {
    const headers = Object.fromEntries(req.headers.entries());

    const body = req.params;

    console.log("body", body);

    if (!headers.authorization) {
      throw new HandledError("Unauthorized", undefined, 401);
    }

    const token = headers?.authorization?.replace("Bearer ", "") || null;

    if (!token) {
      throw new HandledError("Invalid token", undefined, 401);
    }

    const jwtPayload = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as any;

    console.log("jwtPayload", jwtPayload);

    if (!jwtPayload?.app_metadata?.["hasura"]) {
      const admin = supabaseAdmin?.auth.admin;

      if (!admin) {
        throw new HandledError("admin auth doesn't exist", undefined, 401);
      }

      const claimsUpdate = await admin.updateUserById(jwtPayload.sub, {
        app_metadata: {
          ["hasura"]: {
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-user-id": jwtPayload.sub,
            // "x-hasura-user-isAnonymous": false,
          },
        },
      });

      console.log(claimsUpdate);

      if (claimsUpdate.error) {
        throw new HandledError("Claims update failed", undefined, 401);
      }

      if (!claimsUpdate.data?.user?.email || !claimsUpdate.data.user.email_confirmed_at) {
        throw new HandledError("Email mismatch", undefined, 401);
      }

      await gqlServerClient.request<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, {
        object: {
          id: jwtPayload.sub,
          email: jwtPayload.email,
        },
      });
    }

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleError(error);
  }
};

export default baseEdgeHandlerWrapper(handler, {
  method: ["GET"],
  skipAuth: true,
});
