import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { AuthMethods, HandlerConfig } from "src/types";
import { HandledError, handleError } from "./error";
import { validateSchema } from "./validateSchema";
import { jwtVerify } from "jose";
import { gqlServerClient } from "./graphqlServerClient";
import { GetUsersDocument, GetUsersQuery, GetUsersQueryVariables } from "@graphql/generated/graphql";

export interface NextRequestCustom<T = any> extends NextRequest {
  params: T;
  userClaims?: {
    "x-hasura-allowed-roles": string[];
    "x-hasura-default-role": string;
    "x-hasura-user-id": string;
    "x-hasura-user-isAnonymous": "true" | "false";
    user_id: string;
    profile?: {
      email: string;
    };
  };
}

const baseEdgeHandlerWrapper = (handler: (req: NextRequestCustom, con: NextFetchEvent) => Promise<NextResponse>, config: HandlerConfig) => {
  return async (request: NextRequestCustom, context: NextFetchEvent) => {
    let returnResp: NextResponse;

    const path = request.nextUrl.pathname;

    try {
      const { searchParams } = new URL(request.url);

      const queryParams = Object.fromEntries(searchParams.entries());
      const headers = Object.fromEntries(request.headers.entries());

      const bodyJSON =
        !["GET", "DELETE"].includes(request.method) && request.headers.get("content-type") == "application/json" ? await request.json() : {};

      const params = {
        ...queryParams,
        ...bodyJSON,
      };

      if (!config.skipAuth) {
        if (headers.authorization && config.authMethod?.includes(AuthMethods.jwt_key)) {
          const token = headers?.authorization?.replace("Bearer ", "") || null;

          if (!token) {
            throw new HandledError("Invalid token", undefined, 401);
          }

          const jwtPayload = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as any;

          let hasuraClaims = jwtPayload?.app_metadata?.["hasura"];

          if (!hasuraClaims) {
            throw new HandledError("Invalid token", undefined, 401);
          }

          if (
            jwtPayload?.["x-hasura-default-role"] &&
            headers?.["x-hasura-role"] &&
            jwtPayload?.["x-hasura-allowed-roles"] &&
            jwtPayload?.["x-hasura-allowed-roles"].includes(headers?.["x-hasura-role"])
          ) {
            hasuraClaims = headers?.["x-hasura-role"];
          }

          request.userClaims = {
            ...hasuraClaims,
            user_id: hasuraClaims["x-hasura-user-id"],
          };

          if (config.verifyProfile) {
            const userResult = await gqlServerClient.request<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {
              where: {
                id: {
                  _eq: request.userClaims?.user_id,
                },
              },
            });

            if (!userResult.users?.[0].id) {
              throw new HandledError("User profile doesn't exists", undefined, 400);
            }

            (request as any)["userClaims"]["profile"] = {
              email: userResult.users?.[0]?.email,
            };
          }
        } else if (headers["x-admin-api-key"]) {
          if (headers["x-admin-api-key"] != process.env.ADMIN_KEY) {
            throw new HandledError("Invalid admin secret", undefined, 401);
          }
        } else {
          throw new HandledError("Unauthorized", undefined, 401);
        }
      }

      // Check if valid path and method
      if (config?.method && !config.method.includes(request.method.toUpperCase())) {
        throw new HandledError(`Invalid method ${config.method} for route ${path}`);
      }

      if (config?.validationSchema) {
        const validatedParams = await validateSchema(config.validationSchema, params);
        request.params = validatedParams;
      } else if (config?.routesConfig && !config?.validationSchema) {
        const schema = config.routesConfig[request.method.toUpperCase()].validationSchema;

        if (!schema) {
          throw new HandledError(`No validation schema for method ${request.method.toUpperCase()} for route ${path}`);
        }

        const validatedParams = await validateSchema(schema, params);
        request.params = validatedParams;
      } else {
        request.params = params;
      }

      const resp = await handler(request, context);

      returnResp = resp;
    } catch (error) {
      returnResp = handleError(error);
    }

    return returnResp;
  };
};

export default baseEdgeHandlerWrapper;
