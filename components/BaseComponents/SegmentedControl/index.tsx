import { Flex, Text } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import Icon from "../Icon";
import { IconType } from "react-icons";

export interface ISegmentedControlProps {
  options: {
    label: string;
    value: string;
    icon?: IconType;
    iconSize?: string | number;
  }[];
  value?: string;
  onChange?: (value: string) => void;
  wrapperProps?: any;
  optionProps?: any;
}

const SegmentedControl: React.FC<ISegmentedControlProps> = ({ options, value, onChange, wrapperProps, optionProps }) => {
  const [iValue, setIValue] = useState<string | undefined>(value);
  const selectedValue = value || iValue;

  useEffect(() => {
    setIValue(value);
  }, [value]);

  return (
    <Flex>
      <Flex flex={1} gap={"0.1rem"} p={"0.2rem"} borderRadius={"md"} bgColor={"bg.600"} {...wrapperProps}>
        {options.map((o) => (
          <Flex
            flex={1}
            borderRadius={"md"}
            cursor={"pointer"}
            bgColor={selectedValue == o.value ? "bg.400" : undefined}
            py={"0.4rem"}
            px={"1rem"}
            justifyContent={"center"}
            onClick={() => {
              setIValue(o.value);
              onChange?.(o.value);
            }}
            key={o.value}
            fontSize={"xs"}
            textAlign={"center"}
            alignItems={"center"}
            {...optionProps}
          >
            {o.icon && <Icon as={o.icon} size={o?.iconSize || "0.8rem"} color={"bg.400"} />}
            <Text ml={o.icon ? "0.5rem" : undefined}>{o.label}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default memo(SegmentedControl);
