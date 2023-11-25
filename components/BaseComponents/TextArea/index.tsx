import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { Textarea as CTextarea, Text, TextareaProps } from "@chakra-ui/react";

const useAutosizeTextArea = (autoResize: boolean, textAreaRef: HTMLTextAreaElement | null, value: any) => {
  useEffect(() => {
    if (textAreaRef && autoResize) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value, autoResize]);
};

interface IProps extends TextareaProps {
  autoResize?: boolean;
  label?: string;
}

const Textarea = forwardRef<any, IProps>(({ value, onChange, autoResize = false, _before, _focus, label, ...rest }, ref) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useAutosizeTextArea(autoResize, textAreaRef.current, value);

  return (
    <>
      {label && <Text mb={"1rem"}>{label}</Text>}
      <CTextarea
        ref={(localRef) => {
          textAreaRef.current = localRef;
          if (typeof ref === "function") {
            ref(localRef);
          } else if (ref) {
            ref.current = localRef;
          }
        }}
        borderWidth={"1px"}
        borderRadius={"lg"}
        borderColor={"bg.200"}
        bgColor={"bg.600"}
        color={"white"}
        size={"sm"}
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
        _placeholder={{
          color: "bg.200",
        }}
        _before={{
          transition: "all 250ms ease",
          ..._before,
        }}
        _hover={{
          borderColor: "bg.100",
        }}
        _focus={{
          transform: "translate(0,-2px); scale(1.02);",
          borderColor: "bg.100",
          boxShadow: "none",
          outline: "none",
          zIndex: 0,
          ..._focus,
        }}
        zIndex={0}
        {...rest}
      />
    </>
  );
});

Textarea.displayName = "Textarea";

export default memo(Textarea);
