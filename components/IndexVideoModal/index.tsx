import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import Input from "components/BaseComponents/Input";
import { forwardRef, memo, useImperativeHandle, useState } from "react";
import toast from "react-hot-toast";
import { iFetch } from "src/helpers/ifetch";

export interface IIndexVideoModalRef {
  open: () => void;
  close: () => void;
}

const IndexVideoModal = forwardRef<IIndexVideoModalRef, any>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: onClose,
    }),
    []
  );

  const open = () => {
    onOpen();
  };

  const close = () => {
    onClose();
  };

  const onVideoIndex = async () => {
    setLoading(true);
    console.log(input);
    try {
      if (input && (input.includes("youtube.com/watch?v=") || input.includes("youtu.be/") || input.includes("youtube.com/shorts/"))) {
        const resp = await iFetch("/video?url=" + input);
        toast.success("Video indexed successfully");
      } else {
        throw new Error("Invalid Youtube URL");
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
    setLoading(false);
  };

  return (
    <Modal isCentered closeOnOverlayClick={true} closeOnEsc={true} isOpen={isOpen} onClose={() => close()} size={"sm"}>
      <ModalOverlay />
      <ModalContent mx={"1rem"} borderRadius={"xl"}>
        <ModalCloseButton />
        <ModalBody mt={"2rem"} mb={"1.5rem"}>
          <Flex flex={1} flexDirection={"column"} justify={"center"}>
            <Text mb={"2rem"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>
              Index Video
            </Text>

            <Input
              autoFocus
              placeholder={"Youtube video URL"}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="no"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onVideoIndex();
                }
              }}
            />

            <Button isLoading={loading} onClick={(e) => onVideoIndex()} colorScheme={"teal"} mt={"2rem"}>
              {"Index video"}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

IndexVideoModal.displayName = "IndexVideoModal";

export default memo(IndexVideoModal);
