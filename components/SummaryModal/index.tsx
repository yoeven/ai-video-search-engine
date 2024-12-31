import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  UnorderedList,
  ListItem,
  Spinner,
  Button,
  Select,
} from "@chakra-ui/react";
import { GetMatchIndexesQuery } from "@graphql/generated/graphql";
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import { iFetch } from "src/helpers/ifetch";

export interface ISummaryModalRef {
  open: (index: GetMatchIndexesQuery["match_indexes_jss"][0]) => void;
  close: () => void;
}

const SummaryModal = forwardRef<ISummaryModalRef, any>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState<GetMatchIndexesQuery["match_indexes_jss"][0]>();
  const [summary, setSummary] = useState<{
    summaryText: string;
    summaryPoint: string[];
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const summaryTextUtteranceRef = useRef<SpeechSynthesisUtterance>();

  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(true);

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: onClose,
    }),
    []
  );

  const open = (newIndex: GetMatchIndexesQuery["match_indexes_jss"][0]) => {
    setIndex(newIndex);
    onOpen();
  };

  const close = () => {
    setIndex(undefined);
    setSummary(undefined);
    window.speechSynthesis.cancel();
    setPlaying(false);
    onClose();
  };

  useEffect(() => {
    if (!index) return;
    init();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [index?.id]);

  const init = async () => {
    if (!index) return;
    setLoading(true);
    const resp = await iFetch(`/video/${index.id}/summary`);
    setSummary({
      summaryText: resp.summary_text,
      summaryPoint: resp.summary_points,
    });

    const utter = new SpeechSynthesisUtterance(resp.summary_text);
    const voices = window.speechSynthesis.getVoices();
    const defaultVoice = voices.find((v) => v.lang.startsWith("en") && v.name.includes("English"));
    utter.voice = defaultVoice || voices[0];
    utter.onend = () => {
      console.log("on end");
      setFinished(true);
    };
    summaryTextUtteranceRef.current = utter;
    setLoading(false);
  };

  return (
    <Modal closeOnOverlayClick={true} closeOnEsc={true} isOpen={isOpen} onClose={() => close()} size={"xl"}>
      <ModalOverlay />
      <ModalContent mx={"0.5rem"} borderRadius={"xl"}>
        <ModalCloseButton />
        <ModalBody mt={"2rem"} mb={"1.5rem"}>
          <Flex flex={1} flexDirection={"column"} justify={"center"}>
            <Text fontWeight={"600"} fontSize={"xl"} textAlign={"center"}>
              {index?.title} - Summary
            </Text>

            {loading && (
              <Flex mt={"3rem"} justifyContent={"center"}>
                <Spinner color={"white"} />
              </Flex>
            )}

            {!loading && (
              <>
                <Flex flexDir={"column"} mt={"1rem"} borderRadius={"xl"} px={"2rem"} py={"1rem"} bgColor={"bg.400"}>
                  <Text mb={"1rem"} fontWeight={"bold"} fontSize={"md"} textAlign={"center"}>
                    Point summary
                  </Text>

                  {summary?.summaryPoint?.length ? (
                    <UnorderedList>
                      {summary.summaryPoint.map((point) => (
                        <ListItem fontSize={"sm"} mb={"1rem"} key={point}>
                          {point}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  ) : (
                    <Text whiteSpace={"pre-wrap"} mt={"1rem"} fontSize={"md"}>
                      {"loading..."}
                    </Text>
                  )}
                </Flex>
                <Flex flexDir={"column"} mt={"1rem"} borderRadius={"xl"} px={"2rem"} py={"1rem"} bgColor={"bg.400"}>
                  <Text fontWeight={"bold"} mb={"1rem"} fontSize={"lg"} textAlign={"center"}>
                    Full summary
                  </Text>
                  <Text whiteSpace={"pre-wrap"} textAlign={"center"} fontSize={"sm"}>
                    {summary?.summaryText || "loading..."}
                  </Text>
                  <Flex flexDir={["column", "row"]} mt={"2rem"} gap={"0.5rem"}>
                    <Button
                      flex={["auto", 2]}
                      onClick={() => {
                        if (summaryTextUtteranceRef.current) {
                          console.log("speak existing");
                          if (playing) {
                            window.speechSynthesis.pause();
                            setPlaying(false);
                          } else {
                            if (!finished) {
                              window.speechSynthesis.resume();
                            } else {
                              console.log("speak fresh");
                              window.speechSynthesis.speak(summaryTextUtteranceRef.current);
                              setFinished(false);
                            }
                            setPlaying(true);
                          }
                        }
                      }}
                      size={"md"}
                    >
                      {playing ? "Pause" : "Speak"}
                    </Button>
                    {typeof window !== "undefined" && (
                      <Flex flex={1}>
                        <Select
                          placeholder="Select voice"
                          onChange={(e) => {
                            const v = e.target.value;
                            window.speechSynthesis.cancel();
                            setPlaying(false);
                            setFinished(true);
                            console.log("selected voice", window.speechSynthesis);
                            const selectedVoice = window.speechSynthesis.getVoices().find((voices) => voices.name == v);
                            if (selectedVoice && summaryTextUtteranceRef?.current?.voice) {
                              summaryTextUtteranceRef.current.voice = selectedVoice;
                            }
                          }}
                        >
                          {window.speechSynthesis
                            .getVoices()
                            .filter((v) => v.lang.startsWith("en") && v.name.includes("English"))
                            .map((v) => (
                              <option key={v.name} value={v.name}>
                                {v.name}
                              </option>
                            ))}
                        </Select>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

SummaryModal.displayName = "SummaryModal";

export default memo(SummaryModal);
