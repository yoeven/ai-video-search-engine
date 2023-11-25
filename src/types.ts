import { z } from "zod";

export type ObjectLiteral = {
  [key: string]: any;
};

const validationSchema = z.array(z.any()).or(z.any());

export type ValidationSchemaType = z.infer<typeof validationSchema>;

export type HandlerConfig = {
  method?: ("GET" | "POST" | "DELETE" | string)[];
  validationSchema?: ValidationSchemaType;
  skipAuth?: boolean;
  authMethod?: AuthMethods[];
  verifyProfile?: boolean;
  routesConfig?: RoutesConfigType; // overrides method and validationSchema config
  pathIndex?: string; // overrides path indexing, meant for dynamic queries
};

export enum AuthMethods {
  api_key = "api_key",
  public_api_key = "public_api_key",
  admin_key = "admin_key",
  jwt_key = "jwt_key",
  none = "none",
}

export type RoutesConfigType = {
  [key: string]: {
    validationSchema: ValidationSchemaType;
  };
};

export interface HasuraEventPayload<T = any> {
  event: {
    session_variables: { [x: string]: string };
    op: "INSERT" | "UPDATE" | "DELETE" | "MANUAL";
    data: {
      old: T | null;
      new: T | null;
    };
  };
  created_at: string;
  id: string;
  delivery_info: {
    max_retries: number;
    current_retry: number;
  };
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  };
}
