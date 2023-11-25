import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Text,
  ModalFooter,
  Button,
  ButtonProps,
} from "@chakra-ui/react";
import { forwardRef, memo, useImperativeHandle, useState } from "react";

interface IAlertConfig {
  title: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCloseButton?: boolean;
  confirmColorScheme?: ButtonProps["colorScheme"];
  cancelColorScheme?: ButtonProps["colorScheme"];
}

export interface IAlertModalRef {
  open: (alertConfig: IAlertConfig) => void;
  close: () => void;
}

const AlertModal = forwardRef<IAlertModalRef, any>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertConfig, setAlertConfig] = useState<IAlertConfig>();

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: onClose,
    }),
    []
  );

  const open = (newAlertConfig: IAlertConfig) => {
    setAlertConfig({
      confirmText: "ok",
      cancelText: "cancel",
      confirmColorScheme: "primary",
      cancelColorScheme: "gray",
      showCloseButton: true,
      ...newAlertConfig,
    });
    onOpen();
  };

  const close = () => {
    if (alertConfig?.onClose) {
      alertConfig.onClose();
      onClose();
    }
  };

  const onConfirm = () => {
    alertConfig?.onConfirm?.();
    onClose();
  };

  const onCancel = () => {
    if (alertConfig?.onCancel) {
      alertConfig.onCancel();
      onClose();
    }
  };

  return (
    <Modal
      isCentered
      closeOnOverlayClick={alertConfig?.onClose ? true : false}
      closeOnEsc={alertConfig?.onClose ? true : false}
      isOpen={isOpen}
      onClose={() => close()}
      size={"sm"}
    >
      <ModalOverlay />
      <ModalContent mx={"1rem"} borderRadius={"xl"}>
        {alertConfig?.onClose && alertConfig.showCloseButton && <ModalCloseButton />}
        <ModalBody mt={alertConfig?.onClose ? "1.5rem" : "1rem"}>
          <Flex flex={1} flexDirection={"column"} justify={"center"}>
            <Text fontWeight={"600"} fontSize={"xl"} textAlign={"center"}>
              {alertConfig?.title}
            </Text>
            {alertConfig?.description && (
              <Text whiteSpace={"pre-wrap"} mt={"1rem"} textAlign={"center"} fontSize={"md"}>
                {alertConfig.description}
              </Text>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter gap={"3rem"}>
          <Button size={"sm"} onClick={onConfirm} colorScheme={alertConfig?.confirmColorScheme}>
            {alertConfig?.confirmText}
          </Button>
          {alertConfig?.onCancel && (
            <Button size={"sm"} onClick={onCancel} variant="outline" colorScheme={alertConfig.cancelColorScheme}>
              {alertConfig.cancelText}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

AlertModal.displayName = "AlertModal";

export default memo(AlertModal);
