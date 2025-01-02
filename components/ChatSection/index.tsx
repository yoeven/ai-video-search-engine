import { Flex, useOutsideClick, Text, useDisclosure, Spinner } from "@chakra-ui/react";
import { GetMatchIndexesQuery } from "@graphql/generated/graphql";
import Icon from "components/BaseComponents/Icon";
import Input from "components/BaseComponents/Input";
import Image from "components/BaseComponents/Image";
import { useAnimate } from "framer-motion";
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { iFetch } from "src/helpers/ifetch";
import { useAuth } from "src/providers/AuthContext";
import { ChatMessage } from "src/types";
import { IoMdSend } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { usePlatform } from "src/providers/PlatformContext";

export interface IChatSectionRef {
  open: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
  close: () => void;
}

const ChatSection = forwardRef<IChatSectionRef, any>((props, ref) => {
  const { userSessionData } = useAuth();
  const { isMobile } = usePlatform();
  const inputRef = useRef<HTMLInputElement>(null);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState<GetMatchIndexesQuery["match_indexes_gte"][0]>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: clearClose,
    }),
    []
  );

  const open = (newIndex: GetMatchIndexesQuery["match_indexes_gte"][0]) => {
    setIndex(newIndex);
    onOpen();
  };

  const clearClose = () => {
    setIndex(undefined);
    setMessages([]);
    onClose();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (isMobile) return;
    window.onscroll = () => {
      onClose();
      inputRef?.current?.blur();
    };

    return () => {
      window.onscroll = null;
    };
  }, [isMobile]);

  useEffect(() => {
    if (!index) return;
    if (isOpen) {
      inputRef?.current?.focus();
      animate(
        scope.current,
        {
          height: isMobile ? "42dvh" : "25rem",
        },
        {
          onComplete: () => {
            messageBoxRef?.current?.scrollTo({
              top: messageBoxRef?.current?.scrollHeight,
              behavior: "smooth",
            });
          },
        }
      );
    } else {
      animate(
        scope.current,
        {
          height: "auto",
        },
        {
          ease: "easeIn",
        }
      );
    }
  }, [isOpen, index?.id]);

  useOutsideClick({
    ref: scope,
    handler: () => onClose(),
  });

  useEffect(() => {
    if (!index?.id) return;
    setMessages([]);
    init();
  }, [index?.id]);

  useEffect(() => {
    if (!isOpen) return;
    console.log("scroll");
    messageBoxRef?.current?.scrollTo({
      top: messageBoxRef?.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [messages?.[messages.length - 1], isOpen]);

  const init = async () => {
    setLoading(true);
    try {
      const resp = await iFetch("/chat/messages", "POST", {
        index_id: index?.id,
      });

      console.log("get messages", resp);

      if (resp.messages.length) {
        setMessages(resp.messages);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    }

    setLoading(false);
  };

  const sendMessage = async (message: string) => {
    if (!message || loading) return;
    setInputValue("");
    setLoading(true);
    try {
      setMessages((prev) => [
        ...prev,
        {
          message,
          role: "user",
          created_at: new Date().toISOString(),
          id: uuidv4(),
        },
      ]);

      const resp = await iFetch("/chat/send", "POST", {
        index_id: index?.id,
        message,
      });

      console.log("send message", resp);

      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          message: resp.response,
          created_at: new Date().toISOString(),
          role: "ai",
        },
      ]);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    }

    setLoading(false);
  };

  if (!index) return null;

  return (
    <Flex mb={"1rem"} px={"0.5rem"} justifyContent={"center"} w={["100%"]} color={"white"} bottom={0} pos={"fixed"}>
      <Flex
        ref={scope}
        // flex={1}
        flexDir={"column"}
        justifyContent={"space-between"}
        onClick={() => !isOpen && onOpen()}
        px={"1rem"}
        py={"0.5rem"}
        borderRadius={"xl"}
        w={["100%", "2xl"]}
        bgColor={"black"}
      >
        <Flex justifyContent={"space-between"} mb={"1rem"}>
          <Text noOfLines={1} mr={"2rem"}>
            Chat with {index.title}
          </Text>
          <Icon as={IoMdClose} onClick={() => clearClose()} size={"1.4rem"} cursor={"pointer"} />
        </Flex>
        {isOpen && (
          <Flex overscrollBehavior={"contain"} ref={messageBoxRef} pb={"1rem"} overflowY={"scroll"} flexDir={"column"} gap={"1rem"} flex={1}>
            {messages.map((message) => (
              <Flex gap={"0.5rem"} key={message.id}>
                {message.role == "ai" ? (
                  <Image
                    w={"2rem"}
                    h={"2rem"}
                    borderRadius={"full"}
                    src={"https://source.boringavatars.com/marble/120/505?circle=true"}
                    alt={"profile pic"}
                  />
                ) : (
                  <Flex
                    fontWeight={"bold"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                    w={"2rem"}
                    h={"2rem"}
                    borderRadius={"full"}
                    bgColor={"white"}
                  >
                    <Text fontSize={"sm"}>{userSessionData?.email?.slice(0, 2).toUpperCase()}</Text>
                  </Flex>
                )}

                <Text whiteSpace={"pre-line"} mt={"0.2rem"}>
                  {message.message}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}

        <Flex gap={"0.5rem"} alignItems={"center"}>
          <Input
            ref={inputRef}
            placeholder="Ask questions and learn"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(inputValue);
              }
            }}
          />
          {loading ? (
            <Spinner />
          ) : (
            <Icon
              as={IoMdSend}
              size={"1.5rem"}
              color={"gray.300"}
              cursor={"pointer"}
              transition={"all 0.2s"}
              _hover={{
                color: "white",
                transform: "scale(1.1)",
              }}
              onClick={() => sendMessage(inputValue)}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
});

ChatSection.displayName = "ChatSection";

export default memo(ChatSection);
