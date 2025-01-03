import { Flex, Text, useToken } from "@chakra-ui/react";
import Loader from "components/BaseComponents/Loader";
import { ReactNode, memo } from "react";

interface IProps {
  loadingText?: string;
  children?: ReactNode | ReactNode[];
}

const FullScreenLoader: React.FC<IProps> = ({ loadingText }) => {
  const [primary] = useToken("colors", ["primary.500"]);
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={999999}
      position={"fixed"}
      w={"100%"}
      h={"100%"}
      bgColor={"rgba(1,1,1,0.4)"}
    >
      <Loader />
      {loadingText && (
        <Text color={"white"} pt={"1rem"} fontSize={"xl"} fontWeight={"500"}>
          Loading
        </Text>
      )}
    </Flex>
  );
};

export default memo(FullScreenLoader);
