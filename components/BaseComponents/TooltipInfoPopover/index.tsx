import { Tooltip, Box, Icon } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";

interface IProps {
  tip: string;
}

const TooltipInfoPopover: React.FC<IProps> = ({ tip }) => {
  return (
    <Tooltip color={"white"} hasArrow label={tip} placement={"top"} fontSize={"md"}>
      <Box ml={"0.3rem"} as={"span"}>
        <Icon as={BiInfoCircle} />
      </Box>
    </Tooltip>
  );
};

export default TooltipInfoPopover;
