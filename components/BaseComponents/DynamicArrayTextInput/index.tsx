import { Button, Flex } from "@chakra-ui/react";
import Icon from "components/BaseComponents/Icon";
import Input, { InputProps } from "components/BaseComponents/Input";
import { memo, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";

type IItemReturn =
  | string[]
  | {
      [key: string]: string;
    };

export interface IDynamicArrayTextInputProps {
  max?: number;
  doubleInput?: boolean;
  firstInputProps?: InputProps;
  secondInputProps?: InputProps;
  buttonText?: string;
  onChange?: (items: IItemReturn) => void;
  value?: IItemReturn[];
}

const cleanValue = (_value: any[], doubleInput: boolean) => {
  const nV = doubleInput
    ? Object.keys(_value).map((k: any) => ({ key: k, value: _value[k] }))
    : _value.map((v) => ({
        key: v,
        value: v,
      }));

  return nV || [];
};

const DynamicArrayTextInput: React.FC<IDynamicArrayTextInputProps> = ({
  max,
  doubleInput = false,
  firstInputProps,
  secondInputProps,
  buttonText = "add",
  onChange,
  value,
}) => {
  const initItems = value && (value?.length || Object.keys(value)?.length) ? cleanValue(value, doubleInput) : [];
  const [items, setItems] = useState<
    {
      key: string;
      value: string;
    }[]
  >(initItems);

  const iValue = initItems?.length ? initItems : items;

  useEffect(() => {
    onChange?.(
      doubleInput
        ? items.reduce(
            (acc, cur) => ({
              ...acc,
              [cur.key]: cur.value,
            }),
            {}
          )
        : items.map((i) => i.key)
    );
  }, [items, doubleInput]);

  const onAdd = () => {
    setItems((cItem) => [
      ...cItem,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const onRemove = (index: number) => {
    console.log("remove index", index);
    setItems((cItem) => [...cItem.filter((_, i) => i !== index)]);
  };

  const onInputChange = (index: number, text: string, type: "key" | "value") => {
    setItems((cItems) => {
      const newItems = [...cItems];

      newItems[index] = !doubleInput
        ? {
            key: text,
            value: text,
          }
        : {
            ...newItems[index],
            [type]: text,
          };

      return newItems;
    });
  };

  return (
    <>
      <Flex flexDir={"column"} gap={"0.5rem"}>
        {iValue.map((_, i) => (
          <Flex gap={"0.5rem"} alignItems={"center"} key={i}>
            <Input onChange={(e) => onInputChange(i, e.target.value, "key")} key={i + "key"} {...firstInputProps} m={0} value={iValue[i].key} />
            {doubleInput && (
              <Input
                onChange={(e) => onInputChange(i, e.target.value, "value")}
                key={i + "value"}
                {...secondInputProps}
                m={0}
                value={iValue[i].value}
              />
            )}
            <Icon as={BsTrash} color={"red.700"} cursor={"pointer"} onClick={() => onRemove(i)} />
          </Flex>
        ))}
      </Flex>

      {(!max || iValue.length <= max) && (
        <Flex justifyContent={"center"}>
          <Button
            isDisabled={iValue.length > 0 && (!iValue[iValue.length - 1]?.key || !iValue[iValue.length - 1]?.value)}
            onClick={onAdd}
            variant={"ghost"}
            mt={iValue.length > 0 ? "1rem" : 0}
            size={"sm"}
          >
            {buttonText}
          </Button>
        </Flex>
      )}
    </>
  );
};

export default memo(DynamicArrayTextInput);
