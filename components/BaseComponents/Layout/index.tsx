import { Flex, FlexProps } from "@chakra-ui/react";
import { memo } from "react";

const Layout: React.FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex w={"100%"} flex={1} justifyContent={"center"}>
      <Flex py={"2rem"} pb={"10rem"} alignItems={"center"} flexDir={"column"} w={"100%"} maxW={"6xl"} px={["1rem", 0]} minH={"100vh"} {...rest}>
        {children}
      </Flex>
    </Flex>
  );
};

export default memo(Layout);
