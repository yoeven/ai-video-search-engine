import { useToken, Spinner } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  size?: "sm" | "md" | "lg";
}

const Loader: React.FC<IProps> = ({ size = "xl" }) => {
  const [primary] = useToken("colors", ["primary.500"]);

  return <Spinner color={"primary.500"} size={size} thickness="3px" />;
};

export default memo(Loader);
