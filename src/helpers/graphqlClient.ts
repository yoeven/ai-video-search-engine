import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { getAuthHeader } from "./authClientService";
import { ApolloClient, from, HttpLink, InMemoryCache, split } from "@apollo/client";
import { createClient } from "graphql-ws";

const authLink = setContext(async (operation, { headers }) => {
  const authHeader = await getAuthHeader();
  return {
    headers: {
      ...headers,
      ...authHeader,
    },
  };
});

const generateApolloClient = (relay: boolean = false) => {
  let uri = !relay ? process.env.NEXT_PUBLIC_HASURA_ENDPOINT_URL : process.env.NEXT_PUBLIC_HASURA_RELAY_ENDPOINT_URL;
  uri = uri || "";

  const httpLink = new HttpLink({
    uri: uri,
  });

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            lazy: true,
            url: uri.replace(/^https/, "wss"),
            connectionParams: async () => ({
              headers: {
                ...(await getAuthHeader()),
              },
            }),
          })
        )
      : undefined;

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return !(definition.kind === "OperationDefinition" && definition.operation === "subscription");
    },
    httpLink,
    wsLink
  );

  const _initGqlClient = new ApolloClient({
    link: from([authLink, splitLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });

  return _initGqlClient;
};

export const gqlClient = generateApolloClient(false);
export const relayClient = generateApolloClient(true);
