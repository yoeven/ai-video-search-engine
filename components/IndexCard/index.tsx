import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import {
  GetMatchEmbeddingsByIndexDocument,
  GetMatchEmbeddingsByIndexQuery,
  GetMatchEmbeddingsByIndexQueryVariables,
  GetMatchIndexesQuery,
} from "@graphql/generated/graphql";
import Icon from "components/BaseComponents/Icon";
import Image from "components/BaseComponents/Image";
import { memo, useEffect, useState } from "react";
import { gqlClient } from "src/helpers/graphqlClient";
import { FaPlay } from "react-icons/fa";

interface IProps {
  index: GetMatchIndexesQuery["match_indexes_gte"][0];
  indexCount: number;
  searchEmbeddingQuery: any[];
  onSummaryClick: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
  onChatClick: (index: GetMatchIndexesQuery["match_indexes_gte"][0]) => void;
}

const IndexCard: React.FC<IProps> = ({ index, indexCount, searchEmbeddingQuery, onSummaryClick, onChatClick }) => {
  const [relevantContent, setRelevantContent] = useState<GetMatchEmbeddingsByIndexQuery["match_embeddings_gte"]>();
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [playWhenReady, setPlayWhenReady] = useState<boolean>(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const resp = await gqlClient.query<GetMatchEmbeddingsByIndexQuery, GetMatchEmbeddingsByIndexQueryVariables>({
      query: GetMatchEmbeddingsByIndexDocument,
      variables: {
        query_embedding: JSON.stringify(searchEmbeddingQuery),
        match_threshold: 0.5,
        _index_id: index.id,
        where: {
          start_time: {
            _is_null: false,
          },
        },
      },
    });

    const matchedEmbeddings = resp.data.match_embeddings_gte;
    setRelevantContent(matchedEmbeddings);
  };

  useEffect(() => {
    if (playWhenReady && relevantContent && !showVideo) {
      setShowVideo(true);
    }
  }, [relevantContent, playWhenReady, showVideo]);

  const onPlayClick = () => {
    if (relevantContent) {
      setShowVideo(true);
    } else {
      setPlayWhenReady(true);
    }
  };

  const startTime = relevantContent && relevantContent.length ? Math.round(relevantContent[0].start_time) : null;
  const endTime = relevantContent && relevantContent.length ? Math.round(relevantContent[0].end_time) : null;

  return (
    <Flex
      flexDir={"column"}
      overflow={"clip"}
      _hover={{
        // boxShadow: "rgb(0 0 0 / 50%) 0px 5px 80px -15px",
        transform: "translateY(-0.5rem)",
      }}
      transition={"all 0.2s ease-in-out"}
      w={"100%"}
      borderRadius={"xl"}
    >
      <Flex flexDir={"column"} h={indexCount % 2 ? "sm" : "md"} borderRadius={"xl"} overflow={"clip"} pos={"relative"}>
        {showVideo ? (
          <iframe
            height={"100%"}
            src={`https://www.youtube.com/embed/${index.video_id}?cc_load_policy=1&autoplay=1&modestbranding=1&rel=0&start=${startTime}&end=${endTime}`}
            title={index.title || ""}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${index.video_id}/maxres2.jpg
`}
              h={"100%"}
              objectFit={"cover"}
              alt={index.title || ""}
            />
            <Flex
              cursor={"pointer"}
              onClick={() => onPlayClick()}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              h={"100%"}
              bgColor={"blackAlpha.400"}
              pos={"absolute"}
              color={"white"}
              flexDir={"column"}
            >
              {playWhenReady ? (
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Spinner />
                  <Text mt={"1rem"} textAlign={"center"}>
                    Finding related clips
                  </Text>
                </Flex>
              ) : (
                <Icon as={FaPlay} size={"2.5rem"} />
              )}

              {relevantContent ? (
                <Text mt={"1rem"} fontWeight={"500"}>
                  {endTime && startTime ? `${endTime - startTime}s clip` : "Full Video"}
                </Text>
              ) : null}
            </Flex>
          </>
        )}
      </Flex>
      <Flex flexDir={"column"} py={"0.5rem"}>
        <Text noOfLines={2} fontSize={"sm"}>
          {index.title}
        </Text>
        <Flex mt={"1rem"} gap={"0.5rem"}>
          <Button onClick={() => onChatClick(index)} flex={1} size={"sm"} bgColor={"black"} color={"white"}>
            Chat with Video
          </Button>
          <Button onClick={() => onSummaryClick(index)} variant={"outline"} size={"sm"}>
            Summary
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

//maxres1
//`https://i.ytimg.com/vi/${index.video_id}/hq2.jpg`

export default memo(IndexCard);
