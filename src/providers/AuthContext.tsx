import { ApolloProvider } from "@apollo/client";
import { GetUsersDocument, GetUsersQuery, GetUsersQueryVariables } from "@graphql/generated/graphql";
import AuthModal, { IAuthModalRef } from "components/AuthModal";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { isAuthenticatedAsync, onTokenChange, UserSessionData } from "src/helpers/authClientService";
import { gqlClient } from "src/helpers/graphqlClient";

interface IAuthContext {
  userSessionData: UserSessionData | null;
  userBasicData: GetUsersQuery["users"][0] | null;
  isAuth: boolean;
  accessToken: string | null;
  _reInit: (forceRefreshToken?: boolean) => Promise<boolean>;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<IAuthContext>({
  userSessionData: null,
  userBasicData: null,
  isAuth: false,
  accessToken: null,
  _reInit: () => Promise.resolve(true),
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface IAuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const authModalRef = useRef<IAuthModalRef>(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [userSessionData, setUserSessionData] = useState<UserSessionData | null>(null);
  const [userBasicData, setUserBasicData] = useState<GetUsersQuery["users"][0] | null>(null);

  const onTokenChangeSubRef = useRef<any>(null);

  useEffect(() => {
    initialInit();
    return () => {
      onTokenChangeSubRef?.current && onTokenChangeSubRef?.current?.();
    };
  }, []);

  const initialInit = async () => {
    setLoading(true);
    await Promise.all([init()]);
    setLoading(false);
  };

  const _onTokenChange = (session: UserSessionData | null) => {
    console.log("_onTokenChange", session, "isAuth:", isAuth);
    if (session?.accessToken) {
      if (accessToken !== session.accessToken) {
        setAccessToken(session.accessToken);
        setUserSessionData(session);
      }
    } else {
      setAccessToken(null);
      setIsAuth(false);
      setUserSessionData(null);
      setUserBasicData(null);
    }
  };

  const init = async (forceRefreshToken = false) => {
    onTokenChangeSubRef?.current && onTokenChangeSubRef?.current?.();

    const sessionData = await isAuthenticatedAsync(forceRefreshToken);

    let valid = false;

    try {
      if (sessionData?.accessToken && sessionData.user.app_metadata?.["hasura"]) {
        console.log("sessionData", sessionData);
        const userResult = await gqlClient.query<GetUsersQuery, GetUsersQueryVariables>({
          query: GetUsersDocument,
          variables: {
            where: {
              id: {
                _eq: sessionData.user.id,
              },
            },
          },
          context: {
            headers: {
              authorization: `Bearer ${sessionData.accessToken}`,
              "x-hasura-role": "user",
            },
          },
          fetchPolicy: "no-cache",
        });

        console.log("userResult", userResult);

        if (userResult?.data.users?.[0]?.id) {
          valid = true;
          setUserBasicData(userResult.data.users[0]);
        }
      }

      console.log("isAuthenticated", sessionData, "real auth:", valid);

      if (valid) {
        setIsAuth(true);
        setAccessToken(sessionData?.accessToken || null);
        setUserSessionData(sessionData);
      } else {
        setIsAuth(false);
        setAccessToken(null);
        setUserSessionData(null);
        setUserBasicData(null);
      }

      onTokenChangeSubRef.current = onTokenChange(_onTokenChange);
    } catch (error) {
      console.log(error);
      setIsAuth(false);
      setAccessToken(null);
    }

    setLoading(false);
    return valid;
  };

  if (loading) return null;

  return (
    <ApolloProvider client={gqlClient}>
      <AuthContext.Provider
        value={{
          userSessionData,
          userBasicData,
          isAuth,
          accessToken,
          _reInit: init,
          openAuthModal: () => authModalRef.current?.open(),
          closeAuthModal: () => authModalRef.current?.close(),
        }}
      >
        {children}
        <AuthModal ref={authModalRef} onValidated={() => {}} />
      </AuthContext.Provider>
    </ApolloProvider>
  );
};

export default AuthProvider;
