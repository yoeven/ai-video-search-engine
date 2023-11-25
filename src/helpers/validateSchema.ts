import { HandledError } from "./error";
import { ValidationSchemaType } from "src/types";

export const validateSchema = async <T>(schema: ValidationSchemaType, params: any) => {
  try {
    const data: any = await schema.safeParseAsync(params);

    if (!data.success) {
      throw new HandledError("Bad request", data.error.issues[0]);
    }

    return data.data as T;
  } catch (error: any) {
    throw error;
  }
};
