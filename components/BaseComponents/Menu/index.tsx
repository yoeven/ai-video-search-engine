import { Box, Menu as CMenu, Flex, MenuButton, MenuItem, MenuList, MenuProps, useDisclosure } from "@chakra-ui/react";
import React, { memo } from "react";

export interface IMenuOptionProps {
  label: string;
  value: string;
  color?: string;
  onClick?: () => void;
  renderLabel?: () => JSX.Element;
}

export interface IMenuProps extends Partial<MenuProps> {
  renderButton: JSX.Element;
  renderButtonIsMenu?: boolean;
  options?: IMenuOptionProps[];
  onSelect?: (value: string, index: number) => void;
  children?: React.ReactNode | React.ReactNode[];
  selectedValue?: string;
}

const Menu: React.FC<IMenuProps> = ({ renderButton, options, onSelect, children, selectedValue, renderButtonIsMenu, ...rest }) => {
  return (
    <CMenu strategy={"absolute"} {...rest}>
      {renderButtonIsMenu ? (
        renderButton
      ) : (
        <MenuButton
          as={Box}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {renderButton}
        </MenuButton>
      )}

      <MenuList borderWidth={"1px"} borderColor={"bg.200"} borderRadius={"lg"} minW={0} p={"0.3rem"} bgColor={"bg.600"}>
        {options?.map((o, index) => (
          <MenuItem
            key={o.value}
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(o.value, index);
              o?.onClick?.();
            }}
            _hover={{
              bgColor: "bg.400",
              color: "white",
            }}
            fontSize={"sm"}
            borderRadius={"lg"}
            bgColor={selectedValue == o.value ? "bg.800" : "bg.600"}
            color={o?.color || "gray.200"}
          >
            {o.renderLabel ? o.renderLabel() : o.label}
          </MenuItem>
        ))}
        {children}
      </MenuList>
    </CMenu>
  );
};

export default memo(Menu);
