const BASEURL = "https://api.jigsawstack.com/v1";
const key = process.env.JIGSAWSTACK_KEY || "";

const JigsawStackFetch = async (path: string, method: string, body?: any) => {
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const resp = await fetch(`${BASEURL}${path}`, fetchOptions);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
};

export const summary = async (text: string, type: "text" | "points") => {
  const resp = await JigsawStackFetch("/ai/summary", "POST", { text, type });

  return resp.summary;
};

export const getAIChatMessages = async (sessionId: string) => {
  const resp = await JigsawStackFetch(`/ai/chat/${sessionId}`, "GET");
  return resp;
};

export const createAIChatSession = async () => {
  const resp = await JigsawStackFetch(`/ai/chat`, "POST", {});
  return resp;
};

export const sendMessageAIChatSession = async (sessionId: string, message: string, context?: string) => {
  const resp = await JigsawStackFetch(`/ai/chat/${sessionId}`, "POST", {
    message: message,
    additional_context: context,
  });

  return resp;
};
