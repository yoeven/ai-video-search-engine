import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const { NEXT_PUBLIC_HASURA_ENDPOINT_URL, HASURA_ADMIN_SECRET } = process.env;

const graphqlEndpoint: string = NEXT_PUBLIC_HASURA_ENDPOINT_URL as string;

const adminSecret: string = HASURA_ADMIN_SECRET as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [graphqlEndpoint]: {
        headers: {
          "x-hasura-admin-secret": adminSecret,
        },
      },
    },
  ],
  documents: "./graphql/queries/*.gql",
  generates: {
    "./graphql/generated/graphql.ts": {
      // preset: "client",
      config: {
        preResolveTypes: true,
        withHooks: false,
        withMutationFn: false,
        withResultType: false,
        withMutationOptionsType: false,
      },
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
