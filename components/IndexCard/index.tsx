import { Button, Flex, Text } from "@chakra-ui/react";
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
import ReactSingleLoader from "components/ResultLoader/singleLoader";
import { usePlatform } from "src/providers/PlatformContext";

interface IProps {
  index: GetMatchIndexesQuery["match_indexes"][0];
  indexCount: number;
  searchEmbeddingQuery: any[];
  onSummaryClick: (index: GetMatchIndexesQuery["match_indexes"][0]) => void;
  onChatClick: (index: GetMatchIndexesQuery["match_indexes"][0]) => void;
}

const IndexCard: React.FC<IProps> = ({ index, indexCount, searchEmbeddingQuery, onSummaryClick, onChatClick }) => {
  const { isMobile } = usePlatform();
  const [relevantContent, setRelevantContent] = useState<GetMatchEmbeddingsByIndexQuery["match_embeddings"]>();
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    console.log("init count");
    const resp = await gqlClient.query<GetMatchEmbeddingsByIndexQuery, GetMatchEmbeddingsByIndexQueryVariables>({
      query: GetMatchEmbeddingsByIndexDocument,
      variables: {
        query_embedding: JSON.stringify(searchEmbeddingQuery),
        match_threshold: 0.82,
        _index_id: index.id,
        where: {
          start_time: {
            _is_null: false,
          },
        },
      },
      fetchPolicy: "no-cache",
    });

    const matchedEmbeddings = resp.data.match_embeddings;
    setRelevantContent(matchedEmbeddings);
  };

  if (!relevantContent) {
    return (
      <Flex h={indexCount % 2 ? "sm" : "md"} w={"100%"}>
        <ReactSingleLoader height={indexCount % 2 ? 300 : 400} width={isMobile ? window.innerWidth - 50 : undefined} />
      </Flex>
    );
  }

  const startTime = relevantContent.length ? Math.round(relevantContent[0].start_time) : null;
  const endTime = relevantContent.length ? Math.round(relevantContent[0].end_time) : null;

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
              onClick={() => setShowVideo(true)}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              h={"100%"}
              bgColor={"blackAlpha.400"}
              pos={"absolute"}
              color={"white"}
              flexDir={"column"}
            >
              <Icon as={FaPlay} size={"2.5rem"} />
              {endTime != null && startTime != null ? (
                <Text mt={"1rem"} fontWeight={"500"}>
                  {endTime - startTime}s clip
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
