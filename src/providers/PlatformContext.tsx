import { createContext, useContext } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

interface IPlatformContext {
  isMobile: boolean;
}

const PlatformContext = createContext<IPlatformContext>({
  isMobile: false,
});

export const usePlatform = () => useContext(PlatformContext);

interface IPlatformProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const PlatformProvider: React.FC<IPlatformProviderProps> = ({ children }) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <PlatformContext.Provider
      value={{
        isMobile: isMobile || false,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export default PlatformProvider;
