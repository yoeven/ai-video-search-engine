import { Box, BoxProps, Flex, Spinner } from "@chakra-ui/react";
import { createContext, memo, useCallback, useContext, useEffect, useRef, useState } from "react";

interface IVirtualWrapperContext {
  scrollX: number | undefined;
  scrollY: number | undefined;
  itemsInView: number;
}

export interface IVirtualWrapperProps {
  children?: React.ReactNode | React.ReactNode[];
  onEndReached?: () => void;
  endOffsetPercentage?: number;
  wrapperProps?: BoxProps;
  hasMore?: boolean;
  loading?: boolean;
  showLoader?: boolean;
  scrollRefId?: string;
  itemsInView?: number;
}

const VirtualWrapperContext = createContext<IVirtualWrapperContext>({
  scrollX: undefined,
  scrollY: undefined,
  itemsInView: 10,
});

export const useVirtualWrapper = () => useContext(VirtualWrapperContext);

const VirtualWrapper: React.FC<IVirtualWrapperProps> = ({
  children,
  onEndReached,
  endOffsetPercentage = 0,
  wrapperProps,
  hasMore = true,
  loading,
  showLoader = true,
  scrollRefId,
  itemsInView = 10,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined,
  });
  const [isEnd, setIsEnd] = useState(false);
  // const refTimeout = useRef<NodeJS.Timeout>();

  const onScroll = useCallback((e: Event | undefined) => {
    const windowState = (e?.currentTarget || window) as Window | UIEvent | any;

    // refTimeout.current && clearTimeout(refTimeout.current);

    setScroll({
      x: windowState?.scrollX || windowState.scrollLeft + windowState.clientWidth,
      y: windowState?.scrollY || windowState.scrollTop + windowState.clientHeight,
    });
  }, []);

  useEffect(() => {
    onScroll(undefined);

    const scrollElement = scrollRefId ? document.getElementById(scrollRefId) : window;

    if (!scrollElement) return;

    scrollElement.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollElement.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect?.height && scroll.y) {
      const heightVal = rect.height * (1 - endOffsetPercentage);

      if (scroll.y > heightVal && hasMore && !loading && !isEnd) {
        onEndReached?.();
        setIsEnd(true);
      } else if (scroll.y < heightVal && isEnd) {
        setIsEnd(false);
      }
    }
  }, [scroll.y]);

  return (
    <Box {...wrapperProps} ref={ref}>
      <VirtualWrapperContext.Provider
        value={{
          scrollX: scroll.x,
          scrollY: scroll.y,
          itemsInView,
        }}
      >
        {children}
      </VirtualWrapperContext.Provider>
      {loading && showLoader && (
        <Flex pt={"1rem"} justifyContent={"center"}>
          <Spinner color={"primary.500"} />
        </Flex>
      )}
    </Box>
  );
};

export default memo(VirtualWrapper);
