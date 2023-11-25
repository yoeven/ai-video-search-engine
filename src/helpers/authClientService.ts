import { supabase } from "./supabase";

export const getAuthHeader = async () => {
  const newToken = await getAccessToken();

  let newHeaders = {};

  if (newToken) {
    newHeaders = {
      authorization: `Bearer ${newToken}`,
      "x-hasura-role": "user",
    };
  }

  return newHeaders;
};

export const getAccessToken = async () => {
  const { data, error } = await supabase.auth.getSession();

  console.log("getAccessToken", data);

  if (data.session?.access_token && !error) {
    return data.session?.access_token;
  }

  return null;
};

export interface UserSessionData {
  userUid?: string;
  email?: string;
  accessToken?: string;
}

export const onTokenChange = (callback: (token: UserSessionData | null) => void) => {
  const c = supabase.auth.onAuthStateChange((event, session) => {
    console.log("onAuthStateChange", event, session);

    if (["INITIAL_SESSION", "SIGNED_IN", "TOKEN_REFRESHED"].includes(event) && session?.access_token) {
      callback({
        userUid: session.user.id,
        email: session.user.email || "",
        accessToken: session.access_token,
      });
    } else {
      callback(null);
    }
  });

  return () => {
    console.log("Unsubscribe onTokenChange");
    c.data.subscription.unsubscribe();
  };
};

export const isAuthenticatedAsync = async (forceRefreshToken = false) => {
  const { data, error } = forceRefreshToken ? await supabase.auth.refreshSession() : await supabase.auth.getSession();

  if (data?.session?.user && !error) {
    const user = data.session.user;
    const accessToken = data.session.access_token;

    return {
      email: user.email,
      userUid: user.id,
      accessToken: accessToken,
      user: data.session.user,
    };
  } else {
    return null;
  }
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
