import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { forwardRef, memo, useImperativeHandle, useState, cloneElement, FunctionComponentElement } from "react";

interface IProps {}

export interface IGenericFormModalRef {
  open: (formComp: FunctionComponentElement<any>, onCompleted?: () => void) => void;
  close: () => void;
}

const GenericFormModal = forwardRef<IGenericFormModalRef, IProps>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Form, setForm] = useState<FunctionComponentElement<any>>();

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: close,
    }),
    []
  );

  const open = (formComp: FunctionComponentElement<any>, onCompleted?: () => void) => {
    const c = cloneElement(formComp, {
      onCompleted: () => {
        close();
        onCompleted?.();
      },
    });
    setForm(c);
    onOpen();
  };

  const close = () => {
    onClose();
    setForm(undefined);
  };

  if (!isOpen || !Form) return null;

  return (
    <Modal closeOnOverlayClick={false} closeOnEsc={false} isOpen={isOpen} onClose={() => close()} size={"md"}>
      <ModalOverlay />
      <ModalContent pb={"1.5rem"}>
        <ModalCloseButton />
        <ModalBody mt={"2rem"}>{Form}</ModalBody>
      </ModalContent>
    </Modal>
  );
});

GenericFormModal.displayName = "GenericFormModal";

export default memo(GenericFormModal);
