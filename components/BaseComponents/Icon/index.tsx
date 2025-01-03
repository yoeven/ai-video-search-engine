import { Icon as CIcon, IconProps } from "@chakra-ui/react";
import { memo } from "react";

interface IProps extends IconProps {
  size?: string | number | string[] | number[];
  as?: any;
}

const Icon: React.FC<IProps> = (props) => {
  const { size, ...rest } = props;
  const aSize = size || "1rem";

  return <CIcon {...rest} w={aSize} h={aSize} />;
};

export default memo(Icon);
