import { useBoolean } from "@chakra-ui/react";
import FullScreenLoader from "components/FullScreenLoader";
import { createContext, memo, useState, useContext, useEffect, useCallback } from "react";
import router from "next/router";
interface IFullScreenLoaderContext {
  showLoader: (loadingText?: string) => void;
  closeLoader: () => void;
  isLoading: boolean;
}

const FullScreenLoaderContext = createContext<IFullScreenLoaderContext>({
  showLoader: () => {},
  closeLoader: () => {},
  isLoading: false,
});

export const useFullScreenLoader = () => useContext(FullScreenLoaderContext);

interface IFullScreenLoaderProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const FullScreenLoaderProvider: React.FC<IFullScreenLoaderProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useBoolean();
  const [loadingText, setLoadingText] = useState<string>();

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const handleStart = (url: any) => url !== router.asPath && setIsLoading.on();
  const handleComplete = (url: any) => url === router.asPath && setIsLoading.off();

  const onShowLoader = useCallback(
    (loadingText?: string) => {
      setLoadingText(loadingText);
      setIsLoading.on();
    },
    [setIsLoading]
  );

  const onCloseLoader = useCallback(() => {
    setLoadingText(undefined);
    setIsLoading.off();
  }, [setIsLoading]);

  return (
    <FullScreenLoaderContext.Provider
      value={{
        showLoader: onShowLoader,
        closeLoader: onCloseLoader,
        isLoading,
      }}
    >
      {isLoading && <FullScreenLoader loadingText={loadingText} />}
      {children}
    </FullScreenLoaderContext.Provider>
  );
};

export default memo(FullScreenLoaderProvider);
