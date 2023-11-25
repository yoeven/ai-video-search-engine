import { forwardRef, memo, ReactNode } from "react";
import {
  Input as CInput,
  InputGroup,
  InputProps as CInputProps,
  InputLeftElement,
  InputRightElement,
  InputRightElementProps,
  InputLeftElementProps,
  Text,
} from "@chakra-ui/react";

export interface InputProps extends CInputProps {
  renderLeftElement?: ReactNode;
  renderRightElement?: ReactNode;
  leftElementWrapperProps?: InputLeftElementProps;
  rightElementWrapperProps?: InputRightElementProps;
  label?: string;
  disableAnimation?: boolean;
}

const Input = forwardRef<any, InputProps>(
  ({ renderLeftElement, renderRightElement, leftElementWrapperProps, rightElementWrapperProps, label, disableAnimation, ...inputProps }, ref) => {
    return (
      <>
        {label && <Text mb={"1rem"}>{label}</Text>}
        <InputGroup>
          {renderLeftElement && (
            <InputLeftElement pointerEvents="none" {...leftElementWrapperProps}>
              {renderLeftElement}
            </InputLeftElement>
          )}
          <CInput
            ref={ref}
            borderWidth={"1px"}
            borderRadius={"lg"}
            borderColor={"bg.200"}
            bgColor={"bg.600"}
            size={"sm"}
            color={"white"}
            transition={"all 250ms ease"}
            py={"1.2rem"}
            _placeholder={{
              color: "gray.300",
            }}
            _focus={{
              transform: !disableAnimation ? "translate(0,-2px); scale(1.02);" : "none",
              outline: "none",
              borderColor: "bg.100",
              boxShadow: "none",
            }}
            _hover={{
              borderColor: "bg.100",
            }}
            {...inputProps}
          />
          {renderRightElement && (
            <InputRightElement pointerEvents="none" {...rightElementWrapperProps}>
              {renderRightElement}
            </InputRightElement>
          )}
        </InputGroup>
      </>
    );
  }
);

Input.displayName = "Input";

export default memo(Input);
