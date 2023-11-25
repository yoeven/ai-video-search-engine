import { Box } from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  id: string;
  offset?: number | string | number[] | string[];
}

const Anchor: React.FC<IProps> = ({ id, offset = "-6rem" }) => {
  return <Box pos={"relative"} visibility={"hidden"} display={"block"} top={offset} id={id} />;
};

export default memo(Anchor);
