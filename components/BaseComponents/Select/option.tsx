import { Button } from "@chakra-ui/react";
import { memo } from "react";

export interface IOption {
  label: string;
  value: string;
}

interface IProps {
  option: IOption;
  isSelected?: boolean;
  onSelect?: (o: IOption) => void;
}

const Option: React.FC<IProps> = ({ option, onSelect, isSelected = false }) => {
  return (
    <Button
      color={"white"}
      variant={"ghost"}
      justifyContent={"flex-start"}
      size={"sm"}
      fontWeight={isSelected ? "bold" : "normal"}
      bgColor={isSelected ? "bg.300" : undefined}
      _hover={{
        bgColor: "bg.400",
      }}
      onClick={() => {
        onSelect?.(option);
      }}
    >
      {option?.label || option.value}
    </Button>
  );
};

export default memo(Option);
