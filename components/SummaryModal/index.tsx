import {
  Button,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { GetMatchIndexesQuery } from "@graphql/generated/graphql";
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import { iFetch } from "src/helpers/ifetch";
import { jigsaw } from "src/helpers/jigsawstack";

export interface ISummaryModalRef {
  open: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
  close: () => void;
}

const accents = [
  { accent: "en-US-male-3", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-3", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-4", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-4", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-5", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-6", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-5", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-6", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-7", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-7", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-8", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-8", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-9", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-9", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-10", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-10", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-11", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-11", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-12", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-12", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-13", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-14", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-15", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-16", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-13", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-14", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-17", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-18", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-15", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-16", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-19", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-20", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-21", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-22", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-17", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-18", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-19", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-20", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-21", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-23", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-22", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-23", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-neutral-1", locale_name: "English (United States)", gender: "neutral" },
  { accent: "en-US-male-24", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-25", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-26", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-27", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-24", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-25", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-26", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-27", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-28", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-female-28", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-29", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-female-30", locale_name: "English (United States)", gender: "female" },
  { accent: "en-US-male-29", locale_name: "English (United States)", gender: "male" },
  { accent: "en-US-male-30", locale_name: "English (United States)", gender: "male" },
  { accent: "en-AU-female-2", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-male-2", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-female-3", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-female-4", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-male-3", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-male-4", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-female-5", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-female-6", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-female-7", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-male-5", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-female-8", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-AU-male-6", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-male-7", locale_name: "English (Australia)", gender: "male" },
  { accent: "en-AU-female-9", locale_name: "English (Australia)", gender: "female" },
  { accent: "en-CA-female-2", locale_name: "English (Canada)", gender: "female" },
  { accent: "en-CA-male-2", locale_name: "English (Canada)", gender: "male" },
  { accent: "en-GB-female-2", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-2", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-3", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-female-4", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-3", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-5", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-4", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-male-5", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-6", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-female-7", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-6", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-male-7", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-8", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-8", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-9", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-female-10", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-GB-male-9", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-male-10", locale_name: "English (United Kingdom)", gender: "male" },
  { accent: "en-GB-female-11", locale_name: "English (United Kingdom)", gender: "female" },
  { accent: "en-HK-female-1", locale_name: "English (Hong Kong SAR)", gender: "female" },
  { accent: "en-HK-male-1", locale_name: "English (Hong Kong SAR)", gender: "male" },
  { accent: "en-IE-female-3", locale_name: "English (Ireland)", gender: "female" },
  { accent: "en-IE-male-3", locale_name: "English (Ireland)", gender: "male" },
  { accent: "en-IN-female-3", locale_name: "English (India)", gender: "female" },
  { accent: "en-IN-male-3", locale_name: "English (India)", gender: "male" },
  { accent: "en-IN-male-4", locale_name: "English (India)", gender: "male" },
  { accent: "en-IN-female-4", locale_name: "English (India)", gender: "female" },
  { accent: "en-IN-female-5", locale_name: "English (India)", gender: "female" },
  { accent: "en-IN-female-6", locale_name: "English (India)", gender: "female" },
  { accent: "en-IN-male-5", locale_name: "English (India)", gender: "male" },
  { accent: "en-IN-male-6", locale_name: "English (India)", gender: "male" },
  { accent: "en-KE-female-1", locale_name: "English (Kenya)", gender: "female" },
  { accent: "en-KE-male-1", locale_name: "English (Kenya)", gender: "male" },
  { accent: "en-NG-female-1", locale_name: "English (Nigeria)", gender: "female" },
  { accent: "en-NG-male-1", locale_name: "English (Nigeria)", gender: "male" },
  { accent: "en-NZ-female-1", locale_name: "English (New Zealand)", gender: "female" },
  { accent: "en-NZ-male-1", locale_name: "English (New Zealand)", gender: "male" },
  { accent: "en-PH-female-1", locale_name: "English (Philippines)", gender: "female" },
  { accent: "en-PH-male-1", locale_name: "English (Philippines)", gender: "male" },
  { accent: "en-SG-female-1", locale_name: "English (Singapore)", gender: "female" },
  { accent: "en-SG-male-1", locale_name: "English (Singapore)", gender: "male" },
  { accent: "en-TZ-female-1", locale_name: "English (Tanzania)", gender: "female" },
  { accent: "en-TZ-male-1", locale_name: "English (Tanzania)", gender: "male" },
  { accent: "en-ZA-female-1", locale_name: "English (South Africa)", gender: "female" },
  { accent: "en-ZA-male-1", locale_name: "English (South Africa)", gender: "male" },
];

const SummaryModal = forwardRef<ISummaryModalRef, any>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState<GetMatchIndexesQuery["match_indexes_gte"][0]>();
  const [summary, setSummary] = useState<{
    summaryText: string;
    summaryPoint: string[];
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const audioElement = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(true);
  const [accent, setAccent] = useState<string>(accents[0].accent);
  const [loadingAudio, setLoadingAudio] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      open: open,
      close: onClose,
    }),
    []
  );

  const open = (newIndex: GetMatchIndexesQuery["match_indexes_gte"][0]) => {
    setIndex(newIndex);
    onOpen();
  };

  const close = () => {
    setIndex(undefined);
    setSummary(undefined);
    audioElement?.current?.pause();
    audioElement.current = undefined;
    setPlaying(false);
    onClose();
  };

  useEffect(() => {
    if (!index) return;
    init();

    return () => {
      audioElement?.current?.pause();
      audioElement.current = undefined;
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
    setLoading(false);
  };

  const ttsSummary = async () => {
    setLoadingAudio(true);
    const audioFile = await jigsaw.audio.text_to_speech({
      text: summary?.summaryText || "",
      accent: accent as any,
    });
    const a = URL.createObjectURL(await audioFile.blob());
    const audio = new Audio(a);
    audio.onended = () => {
      setPlaying(false);
      setFinished(true);
    };
    audioElement.current = audio;
    audio.play();
    setPlaying(true);
    setLoadingAudio(false);
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
                      isLoading={loadingAudio}
                      isDisabled={loadingAudio}
                      flex={["auto", 2]}
                      onClick={() => {
                        if (audioElement.current) {
                          if (playing) {
                            audioElement.current.pause();
                            setPlaying(false);
                          } else {
                            if (!finished) {
                              audioElement.current.play();
                            } else {
                              console.log("speak fresh");
                              audioElement.current.play();
                              setFinished(false);
                            }
                            setPlaying(true);
                          }
                        } else {
                          ttsSummary();
                        }
                      }}
                      size={"md"}
                    >
                      {playing ? "Pause" : "Speak"}
                    </Button>

                    <Flex flex={1}>
                      <Select
                        value={accent}
                        placeholder="Select voice"
                        onChange={(e) => {
                          setPlaying(false);
                          setFinished(true);
                          audioElement?.current?.pause();
                          audioElement.current = undefined;
                          setAccent(e.target.value);
                        }}
                      >
                        {accents.map((v) => (
                          <option key={v.accent} value={v.accent}>
                            {v.locale_name} {v.gender}
                          </option>
                        ))}
                      </Select>
                    </Flex>
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
