import { ApolloProvider } from "@apollo/client";
import AlertModal, { IAlertModalRef } from "components/BaseComponents/AlertModal";
import { RefObject, createContext, useContext, useRef } from "react";
import { gqlClient } from "src/helpers/graphqlClient";
import { useBreakpointValue } from "@chakra-ui/react";
import GenericFormModal, { IGenericFormModalRef } from "components/BaseComponents/GenericFormModal";

interface IPlatformContext {
  alertModalRef?: RefObject<IAlertModalRef>;
  genericModalRef?: RefObject<IGenericFormModalRef>;
  isMobile: boolean;
  selectedOrganisationId?: string;
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
  const alertModalRef = useRef<IAlertModalRef>(null);
  const genericModalRef = useRef<IGenericFormModalRef>(null);

  return (
    <ApolloProvider client={gqlClient}>
      <PlatformContext.Provider
        value={{
          alertModalRef,
          genericModalRef,
          isMobile: isMobile || false,
        }}
      >
        {children}

        <AlertModal ref={alertModalRef} />
        <GenericFormModal ref={genericModalRef} />
      </PlatformContext.Provider>
    </ApolloProvider>
  );
};

export default PlatformProvider;
