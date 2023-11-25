import { NextResponse } from "next/server";

/**
 * HandledError - Custom Error class for to handle non-operational errors
 */
export class HandledError {
  message: string;
  error: { [key: string]: any } | null | undefined;
  code: number;
  constructor(message: string, error?: { [key: string]: any }, code?: number) {
    this.message = message;
    this.error = error;
    this.code = code || 400;
  }
}

export const handleError = (error: any) => {
  if (error instanceof NextResponse) {
    return error;
  }

  if (error instanceof HandledError) {
    const er = {
      message: error.message,
      error: error.error,
      success: false,
    };
    console.log(error);

    return NextResponse.json(er, {
      status: error?.code || 400,
    });
  }

  console.error(error);
  console.error(JSON.stringify(error));
  return NextResponse.json(
    { message: "Something went wrong :(. Please contact support@jigsawstack.com", success: false },

    {
      status: 500,
    }
  );
};
