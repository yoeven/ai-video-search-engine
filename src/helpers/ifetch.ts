import { getAuthHeader } from "./authClientService";

export const iFetch = async <Body>(path: string, method: "POST" | "GET" | "DELETE" = "GET", body?: Body, headers: Record<string, string> = {}) => {
  const options: any = {
    method: method,
    headers: {},
  };

  if (body) {
    if (method == "POST") {
      options["body"] = JSON.stringify(body);
      options["headers"]["content-type"] = "application/json";
    } else {
      const urlParams = new URLSearchParams(body as any);
      path = `${path}${path.includes("?") ? "&" : "?"}${urlParams.toString()}`;
    }
  }

  const authHeader = await getAuthHeader();

  if (headers) {
    options["headers"] = {
      ...options.headers,
      ...authHeader,
      ...headers,
    };
  }

  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${path}`, options);

    if (!resp.ok) {
      const cResp = resp.clone();
      const err = cResp.headers.get("content-type")?.includes("application/json")
        ? await cResp.json()
        : {
            message: cResp.statusText,
          };
      const message = err?.message || "Unknown error";
      throw new Error(message);
    }

    if (resp.headers.get("content-type")?.includes("application/json")) {
      return await resp.json();
    }

    return resp;
  } catch (error) {
    throw error;
  }
};
