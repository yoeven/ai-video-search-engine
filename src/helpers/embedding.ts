import ky from "ky";

export const embedJSS = async (params: {
  text?: string;
  type: string;
  url?: string;
  file_content?: any;
}) => {
  const resp = await ky
    .post<any>("https://api.jigsawstack.com/v1/embedding", {
      json: params,
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_JIGSAWSTACK_KEY,
        "x-jigsaw-no-request-log": "true",
      },
      timeout: false,
    })
    .json();

  return resp;
};
