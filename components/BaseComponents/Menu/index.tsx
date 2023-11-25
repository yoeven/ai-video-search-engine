import React, { memo } from "react";
import { Menu as CMenu, MenuButton, MenuList, MenuItem, MenuProps, Box, Flex } from "@chakra-ui/react";

export interface IMenuOptionProps {
  label: string;
  value: string;
  color?: string;
  onClick?: () => void;
  renderLabel?: () => JSX.Element;
}

export interface IMenuProps extends Partial<MenuProps> {
  renderButton: () => JSX.Element;
  renderButtonIsMenu?: boolean;
  options?: IMenuOptionProps[];
  onSelect?: (value: string, index: number) => void;
  children?: React.ReactNode | React.ReactNode[];
  selectedValue?: string;
}

const Menu: React.FC<IMenuProps> = ({ renderButton, options, onSelect, children, selectedValue, renderButtonIsMenu, ...rest }) => {
  return (
    <CMenu {...rest}>
      {renderButtonIsMenu ? (
        renderButton()
      ) : (
        <MenuButton
          as={Box}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {renderButton()}
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
            }}
            fontSize={"sm"}
            borderRadius={"lg"}
            bgColor={selectedValue == o.value ? "bg.800" : "bg.600"}
            color={o.color}
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
