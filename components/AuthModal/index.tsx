import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Button,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import Input from "components/BaseComponents/Input";
import dayjs from "dayjs";
import { forwardRef, memo, useImperativeHandle, useState } from "react";
import toast from "react-hot-toast";
import { iFetch } from "src/helpers/ifetch";
import { supabase } from "src/helpers/supabase";
import { useAuth } from "src/providers/AuthContext";
import { useFullScreenLoader } from "src/providers/FullScreenLoaderContext";
import { z } from "zod";

export interface IAuthModalRef {
  open: () => void;
  close: () => void;
}

interface IProps {
  onValidated?: () => void;
}

const AuthModal = forwardRef<IAuthModalRef, IProps>(({ onValidated }, ref) => {
  const { isAuth, _reInit } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showLoader, closeLoader } = useFullScreenLoader();
  const [values, setValues] = useState<{
    email: string | undefined;
    otp: string | undefined;
  }>({
    email: undefined,
    otp: undefined,
  });
  const [OTPSent, setOTPSent] = useState<boolean>(false);
  const [OTPSentDateTime, setOTPSentDateTime] = useState<any>(null);

  //   const [loading, setLoading] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: onClose,
    }),
    [isAuth]
  );

  const open = () => {
    if (!isAuth) {
      onOpen();
    }
  };

  const close = () => {
    setValues({
      email: undefined,
      otp: undefined,
    });
    setOTPSent(false);
    setOTPSentDateTime(null);
    onClose();
  };

  const updateValue = (key: keyof typeof values, value: any) => {
    setValues((prev) => ({
      ...prev,
      [key]: value ?? undefined,
    }));
  };

  const onSendOTP = async () => {
    showLoader();
    try {
      const currentSession = await supabase.auth.getSession();
      if (currentSession.data.session?.user?.email && currentSession.data.session?.user?.email_confirmed_at) {
        await supabase.auth.signOut();
      }

      const result = z.string().email().safeParse(values.email);

      if (!result.success || !values.email) {
        throw new Error("Invalid email");
      }

      const { data, error } = await supabase.auth.signInWithOtp({
        email: values.email,
      });

      if (error) {
        throw error;
      }

      setOTPSent(true);
      setOTPSentDateTime(dayjs());
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
    closeLoader();
  };

  const onVerifyOTP = async (otp: string | undefined) => {
    showLoader();

    try {
      if (!otp || otp.length !== 6 || !OTPSent || !values.email) {
        throw new Error("Invalid OTP");
      }

      const { data, error } = await supabase.auth.verifyOtp({
        email: values.email,
        token: otp,
        type: "email",
      });

      if (error) {
        throw error;
      }

      // await _reInit(true);

      await iFetch("/user/verify");

      await _reInit(true);

      onValidated?.();
      close();

      toast.success("Signed in successfully");
    } catch (error: any) {
      console.log(error?.message);
      toast(error?.message);
    }

    closeLoader();
  };

  const onResetRequest = async () => {
    const currentDateTime = dayjs();

    if (OTPSentDateTime) {
      if (currentDateTime.diff(OTPSentDateTime, "minute") < 1) {
        toast(`${currentDateTime.diff(OTPSentDateTime, "seconds")}s - Please wait for 1 minute before trying again`);

        return;
      }
    }

    setOTPSent(false);
  };

  return (
    <Modal isCentered closeOnOverlayClick={true} closeOnEsc={true} isOpen={isOpen} onClose={() => close()} size={"sm"}>
      <ModalOverlay />
      <ModalContent mx={"1rem"} borderRadius={"xl"}>
        <ModalCloseButton />
        <ModalBody mt={"2rem"} mb={"1.5rem"}>
          <Flex flex={1} flexDirection={"column"} justify={"center"}>
            <Text mb={"2rem"} textAlign={"center"} fontWeight={"bold"} fontSize={"2xl"}>
              Log in to continue
            </Text>

            {!OTPSent && (
              <Input
                type={"email"}
                placeholder={"Email"}
                value={values?.email}
                onChange={(e) => updateValue("email", e.target.value)}
                autoComplete="no"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSendOTP();
                  }
                }}
              />
            )}

            {OTPSent && <Text fontSize={"sm"} mb={"2rem"} textAlign={"center"}>{`6 digit code sent to ${values.email}`}</Text>}

            {OTPSent && (
              <Flex gap={"0.5rem"} justifyContent={"center"} flexDir={"row"}>
                <PinInput onChange={(v) => updateValue("otp", v)} onComplete={(v) => onVerifyOTP(v)} otp>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </Flex>
            )}

            {OTPSent && (
              <Button onClick={() => onResetRequest()} mt={"2rem"} size={"sm"} variant={"link"} color={"white"}>
                {`Didn't receive code? Update number`}
              </Button>
            )}

            <Button
              onClick={(e) => {
                e.preventDefault();
                OTPSent ? onVerifyOTP(values.otp) : onSendOTP();
              }}
              colorScheme={"teal"}
              mt={"2rem"}
            >
              {OTPSent ? "Verify & Continue" : "Request OTP"}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

AuthModal.displayName = "AuthModal";

export default memo(AuthModal);
