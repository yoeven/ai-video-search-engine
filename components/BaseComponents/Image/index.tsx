import { Image as CImage, ImageProps } from "@chakra-ui/react";
import { memo } from "react";

const Icon: React.FC<ImageProps> = (props) => {
  return <CImage loading="lazy" objectFit="cover" w="100%" {...props} />;
};

export default memo(Icon);
