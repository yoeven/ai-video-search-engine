import { Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure, Text, Box } from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import Input from "../Input";
import Option, { IOption } from "./option";
import Icon from "../Icon";
import { BsChevronDown, BsX } from "react-icons/bs";

export interface ISelectProps {
  options?: IOption[];
  isMulti?: boolean;
  selectAll?: boolean;
  placeholder?: string;
  value?: string[] | string | null;
  onChange?: (o: string[] | string | null) => void;
  closeOnBlur?: boolean;
  multiEclipseLimit?: number;
  allowCustomValue?: boolean;
  isDisabled?: boolean;
}

const processIncomingValue = (value: string[] | string | null, isMulti: boolean) => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return isMulti ? value : value?.[0] ? [value[0]] : [];
  }

  return [value];
};

const Select: React.FC<ISelectProps> = ({
  options = [],
  isMulti = false,
  selectAll = false,
  placeholder,
  onChange,
  closeOnBlur = true,
  value,
  multiEclipseLimit = 2,
  allowCustomValue,
  isDisabled,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onClose, onOpen, isOpen } = useDisclosure();

  const [initOptions, setInitOptions] = useState<IOption[]>(options);

  const optionsByValue: any = initOptions.reduce((acc, o) => ({ ...acc, [o.value]: o }), {});
  const [selectedValue, setSelectedValue] = useState<string[]>(value ? processIncomingValue(value, isMulti) : []);
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [menuFocus, setMenuFocus] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{ label: string; value: string }[]>(options);
  const [controlledChange, setControlledChange] = useState<boolean>(true);

  useEffect(() => {
    onSearch();
  }, [searchInput, inputFocus]);

  useEffect(() => {
    const initSelectedValues = value ? processIncomingValue(value, isMulti) : [];
    const initValuesNotInOptions = allowCustomValue ? initSelectedValues.filter((v) => !options.find((o) => o.value === v)) : [];

    setInitOptions([
      ...options,
      ...initValuesNotInOptions.map((v) => ({
        label: v,
        value: v,
      })),
    ]);
  }, [options]);

  useEffect(() => {
    if (controlledChange) {
      setControlledChange(false);
      return;
    }
    setControlledChange(true);
    setSelectedValue(value ? processIncomingValue(value, isMulti) : []);
  }, [value]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!menuFocus && !inputFocus) {
        setSearchInput("");
        setSearchResults(initOptions);
        closeOnBlur && close();
      }

      if (inputFocus && !isOpen) {
        onOpen();
      }
    }, 10);

    return () => {
      clearTimeout(t);
    };
  }, [menuFocus, inputFocus]);

  useEffect(() => {
    if (!controlledChange) {
      onChange?.(isMulti ? selectedValue : selectedValue?.[0] || null);
    } else {
      setControlledChange(false);
    }
  }, [selectedValue]);

  const onSearch = () => {
    if (searchInput.length > 0 || inputFocus) {
      setSearchResults(
        initOptions.filter((o) => {
          return (o?.label || o?.value).toLowerCase().includes(searchInput.toLowerCase());
        })
      );
    } else {
      setSearchResults(initOptions);
    }
  };

  const onSelect = (value: string) => {
    if (isMulti) {
      if (selectedValue.includes(value)) {
        setSelectedValue(selectedValue.filter((v) => v !== value));
      } else {
        setSelectedValue([...selectedValue, value]);
      }
    } else {
      setSelectedValue([value]);
    }
  };

  const onOptionAdd = (value: string) => {
    if (optionsByValue[value]) {
      onSelect(value);
    } else {
      console.log("add", value);
      setInitOptions((prev) => [
        ...prev,
        {
          label: value,
          value: value,
        },
      ]);
      onSelect(value);
    }
  };

  const getInputValue = () => {
    if (selectedValue.length === 0 || inputFocus) {
      return "";
    }

    if (selectedValue.length === initOptions.length && initOptions.length > 1 && initOptions.length == options.length) {
      return "All selected";
    }

    if (isMulti) {
      if (selectedValue.length > multiEclipseLimit) {
        // let val1 = optionsByValue[selectedValue[0]].label || optionsByValue[selectedValue[0]].value;
        // let val2 = optionsByValue[selectedValue[1]].label || optionsByValue[selectedValue[1]].value;
        // val1 = val1.length > 6 ? val1.slice(0, 6) + "..." : val1;
        // val2 = val2.length > 6 ? val2.slice(0, 6) + "..." : val2;

        const valuesToShow = [];

        for (let index = 0; index < multiEclipseLimit; index++) {
          const v = selectedValue[index];
          const displayValue = optionsByValue[v]?.label || optionsByValue[v]?.value;
          valuesToShow.push(displayValue);
        }

        return `${valuesToShow.join(", ")} + ${selectedValue.length - multiEclipseLimit}`;
      } else {
        return selectedValue.map((s) => optionsByValue[s]?.label).join(", ");
      }
    }

    return optionsByValue[selectedValue[0]]?.label;
  };

  const close = () => {
    onClose();
    setMenuFocus(false);
    setInputFocus(false);
  };

  const renderOptions = inputFocus || searchInput.length > 0 ? searchResults : initOptions;
  const showSelectAll = isMulti && selectAll && searchInput.length === 0 && selectedValue.length != initOptions.length;

  return (
    <Flex flexDir={"column"}>
      <Popover isLazy returnFocusOnClose={false} isOpen={isOpen} closeOnBlur initialFocusRef={inputRef} matchWidth autoFocus={false}>
        <PopoverTrigger>
          <Input
            ref={inputRef}
            isDisabled={isDisabled}
            value={inputFocus ? searchInput : getInputValue()}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={inputFocus ? placeholder || "Search..." : placeholder || "Select"}
            rightElementWrapperProps={{
              pointerEvents: selectedValue.length > 0 && !isOpen ? "auto" : "none",
            }}
            renderRightElement={
              !isDisabled && (
                <Icon
                  cursor={"pointer"}
                  onClick={() => {
                    setSelectedValue([]);
                    setSearchInput("");
                  }}
                  color={"gray.400"}
                  size={selectedValue.length > 0 && !isOpen ? "1.2rem" : "1rem"}
                  as={selectedValue.length > 0 && !isOpen ? BsX : BsChevronDown}
                />
              )
            }
          />
        </PopoverTrigger>

        <PopoverContent
          bgColor={"bg.600"}
          borderColor={"bg.200"}
          borderWidth={"1px"}
          onBlur={() => setMenuFocus(false)}
          onFocus={() => setMenuFocus(true)}
          overflowY={"scroll"}
          maxH={"15.5rem"}
          minW={0}
          w={"100%"}
        >
          <PopoverBody py={0} px={0}>
            <Flex p={"0.2rem"} flexDir={"column"}>
              {showSelectAll && (
                <Option
                  option={{
                    label: "Select all",
                    value: "select_all",
                  }}
                  onSelect={() => {
                    setSelectedValue(initOptions.map((o) => o.value));
                    close();
                  }}
                />
              )}
              {renderOptions.map((o) => (
                <Option
                  key={o.value}
                  option={o}
                  isSelected={selectedValue.includes(o.value)}
                  onSelect={() => {
                    onSelect(o.value);
                    if (!isMulti) {
                      close();
                    }
                  }}
                />
              ))}

              {allowCustomValue && searchInput.length > 0 && !initOptions.find((o) => o.value === searchInput) && (
                <Option
                  option={{
                    label: `Add "${searchInput}"`,
                    value: searchInput,
                  }}
                  onSelect={() => {
                    onOptionAdd(searchInput);
                    close();
                  }}
                />
              )}

              {renderOptions.length === 0 && !showSelectAll && !allowCustomValue && (
                <Text color={"gray.400"} textAlign={"center"} py={"0.5rem"} fontSize={"sm"}>
                  {"None"}
                </Text>
              )}
              {allowCustomValue && (
                <Text color={"gray.400"} textAlign={"center"} py={"0.5rem"} fontSize={"sm"}>
                  {"Type to add custom value"}
                </Text>
              )}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default memo(Select);
