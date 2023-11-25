import { Flex, FlexProps, Box } from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import { useVirtualWrapper } from "./VirtualWrapperContext";

const isInViewport = (rect: DOMRect, itemsInView: number = 10) => {
  const itemHeight = (rect.height *= itemsInView);
  return !(rect.top > innerHeight + itemHeight || rect.bottom + itemHeight < 0);
};

const VirtualizedFlex: React.FC<FlexProps> = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  const [initRect, setInitRect] = useState<DOMRect>();
  const [inPort, setInPort] = useState(true);
  const { scrollX, scrollY, itemsInView } = useVirtualWrapper();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inPort && (rect?.height || rect?.width)) {
        setInitRect(rect);
      }
    }, 1000);

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [rect?.height, rect?.width]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (initRect && rect) {
        // console.log("initRect", scrollY);
        const result = isInViewport(rect, itemsInView);
        setInPort(result);
      }
    }, 200);

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [scrollX, scrollY]);

  return (
    <Flex ref={ref} flexDir={"column"} {...rest}>
      {!inPort ? <Box w={initRect?.width} height={initRect?.height} /> : children}
    </Flex>
  );
};

export default memo(VirtualizedFlex);
