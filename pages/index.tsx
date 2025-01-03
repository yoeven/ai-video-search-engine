import { Box, Flex, MenuButton, Text } from "@chakra-ui/react";
import {
  GetIndexAggregateDocument,
  GetIndexAggregateQuery,
  GetIndexAggregateQueryVariables,
  GetMatchIndexesDocument,
  GetMatchIndexesQuery,
  GetMatchIndexesQueryVariables,
} from "@graphql/generated/graphql";
import Icon from "components/BaseComponents/Icon";
import Image from "components/BaseComponents/Image";
import Input from "components/BaseComponents/Input";
import Layout from "components/BaseComponents/Layout";
import Menu from "components/BaseComponents/Menu";
import ChatSection, { IChatSectionRef } from "components/ChatSection";
import IndexVideoModal, { IIndexVideoModalRef } from "components/IndexVideoModal";
import ResultList from "components/ResultList";
import ReactSingleLoader from "components/ResultLoader/singleLoader";
import SummaryModal, { ISummaryModalRef } from "components/SummaryModal";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdMenu } from "react-icons/io";
import Masonry from "react-masonry-css";
import { signOut } from "src/helpers/authClientService";
import { embedJSS } from "src/helpers/embedding";
import { gqlClient } from "src/helpers/graphqlClient";
import { gqlServerClient } from "src/helpers/graphqlServerClient";
import { jigsaw } from "src/helpers/jigsawstack";
import { useAuth } from "src/providers/AuthContext";
import { usePlatform } from "src/providers/PlatformContext";

interface IProps {
  sumDurationSeconds: number;
  sumVideos: number;
}

export const getStaticProps = (async (context) => {
  const resp = await gqlServerClient.request<GetIndexAggregateQuery, GetIndexAggregateQueryVariables>(GetIndexAggregateDocument);
  return {
    props: {
      sumDurationSeconds: resp.indexes_aggregate.aggregate?.sum?.duration_seconds || 0,
      sumVideos: resp.indexes_aggregate.aggregate?.count || 0,
    },
    revalidate: 60 * 30,
  };
}) satisfies GetStaticProps<IProps>;

const Home: NextPage<IProps> = ({ sumDurationSeconds, sumVideos }) => {
  const { isAuth, openAuthModal } = useAuth();
  const { isMobile } = usePlatform();
  const ref = useRef<HTMLInputElement>(null);
  const summaryModalRef = useRef<ISummaryModalRef>(null);
  const chatSectionRef = useRef<IChatSectionRef>(null);
  const indexVideoModalRef = useRef<IIndexVideoModalRef>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [results, setResults] = useState<GetMatchIndexesQuery["match_indexes_gte"]>([]);
  const [searchEmbeddingQuery, setSearchEmbeddingQuery] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!inputValue.length) {
      setSuggestions([]);
      return;
    }
    const id = setTimeout(() => {
      onInputChange(inputValue);
    }, 150);

    return () => {
      id && clearTimeout(id);
    };
  }, [inputValue]);

  const onInputChange = async (query: string) => {
    const res = await jigsaw.web.search_suggestions(query);
    setSuggestions(res?.suggestions?.length ? res.suggestions : []);
  };

  const onSearch = async (value: string) => {
    if (!value || value.length <= 6) {
      toast.error("Question is too short");
      return;
    }
    setLoading(true);
    const e = await embedJSS({
      text: value,
      type: "text",
    });

    const searchEmbeddingQuery = e.embeddings[0];

    console.log("searchEmbeddingQuery: ", JSON.stringify(searchEmbeddingQuery));

    const resp = await gqlClient.query<GetMatchIndexesQuery, GetMatchIndexesQueryVariables>({
      query: GetMatchIndexesDocument,
      variables: {
        query_embedding: JSON.stringify(searchEmbeddingQuery),
        match_threshold: 0.6,
        limit: 100,
      },
    });

    console.log(
      "ids: ",
      resp.data.match_indexes_gte.map((i) => i.id)
    );

    if (resp.data.match_indexes_gte.length <= 0) {
      toast.error("No results found. Try indexing more related videos to your question", {
        duration: 10000,
      });
    }

    console.log("results: ", resp.data.match_indexes_gte.length);

    setResults(resp.data.match_indexes_gte);
    setSearchEmbeddingQuery(searchEmbeddingQuery);
    setLoading(false);
  };

  return (
    <Layout justifyContent={"space-between"}>
      {results.length <= 0 && !loading && <Flex minH={"8rem"} alignItems={"center"} flexDir={"column"}></Flex>}

      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        {/*search input */}
        <Flex pos={"relative"} flexDir={"column"} w={["100%", "lg"]}>
          <Flex>
            <Input
              ref={ref}
              placeholder={"Ask a specific question"}
              autoFocus
              borderRadius={"3xl"}
              py={"1.3rem"}
              pl={"1rem"}
              pr={"2.6rem"}
              value={query}
              onFocus={() => setInputFocused(true)}
              onBlur={() => {
                setTimeout(() => {
                  setInputFocused(false);
                }, 300);
              }}
              onChange={(e) => {
                setQuery(e.target.value);
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(query);
                  setInputFocused(false);
                  setInputValue("");
                  setSuggestions([]);
                  ref.current?.blur();
                }
              }}
              inputGroupProps={{
                zIndex: 1,
              }}
              rightElementWrapperProps={{
                pointerEvents: "auto",
                pt: "0.2rem",
                pr: "0.3rem",
              }}
              renderRightElement={
                <Menu
                  options={[
                    {
                      label: "Index videos",
                      value: "index_videos",
                      onClick: () => {
                        isAuth ? indexVideoModalRef.current?.open() : openAuthModal();
                      },
                    },
                    isAuth
                      ? {
                          label: "Sign out",
                          value: "sign_out",
                          color: "red.500",
                          onClick: async () => {
                            await signOut();
                            toast.success("Signed out");
                          },
                        }
                      : {
                          label: "Sign in",
                          value: "sign_in",
                          onClick: () => {
                            openAuthModal();
                          },
                        },
                  ]}
                  placement={"top"}
                  gutter={15}
                  renderButtonIsMenu
                  renderButton={
                    <MenuButton
                      _hover={{
                        color: "white",
                      }}
                      color={"gray.400"}
                    >
                      <Flex>
                        <Icon as={IoMdMenu} size={"1.5rem"} />
                      </Flex>
                    </MenuButton>
                  }
                />
              }
            />
          </Flex>

          {suggestions.length > 0 && inputFocused && (
            <Flex
              top={"2.5rem"}
              w={"100%"}
              pos={"absolute"}
              borderRadius={"xl"}
              px={"1.5rem"}
              py={"1rem"}
              bgColor={"bg.600"}
              mt={"0.5rem"}
              flexDir={"column"}
              gap={"0.2rem"}
              zIndex={1}
            >
              {suggestions.map((suggestion) => (
                <Text
                  cursor={"pointer"}
                  color={"white"}
                  key={suggestion}
                  _hover={{ textDecoration: "underline" }}
                  onClick={() => {
                    setQuery(suggestion);
                    setInputValue("");
                    setSuggestions([]);
                    onSearch(suggestion);
                    setInputFocused(false);
                  }}
                >
                  {suggestion}
                </Text>
              ))}
            </Flex>
          )}
        </Flex>
        {/*search suggestions */}
        {results.length <= 0 && !loading && (
          <>
            <Flex justifyContent={"center"} mt={"1rem"} gap={["0.5rem", "1rem"]} flexWrap={"wrap"}>
              {[
                {
                  value: "Human brain",
                  query: "How does the human brain work",
                },
                {
                  value: "Learn Supabase",
                  query: "How to get started with Supabase",
                },
                {
                  value: "Startups",
                  query: "What is the best way to start a startup",
                },
                {
                  value: "AI Image generation",
                  query: "What are some ways to get started with AI image generation and stable diffusion",
                },
                {
                  value: "Future of startups",
                  query: "What is the future of startups",
                },
              ].map((i) => (
                <Flex
                  key={i.query}
                  _hover={{
                    borderColor: "teal.500",
                  }}
                  onClick={() => {
                    setQuery(i.query);
                    setInputValue("");
                    setSuggestions([]);
                    onSearch(i.query);
                    setInputFocused(false);
                  }}
                  cursor={"pointer"}
                  borderWidth={"1px"}
                  borderColor={"gray.400"}
                  py={"0.2rem"}
                  px={"0.5rem"}
                  borderRadius={"10rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text fontSize={["xs", "sm"]} textAlign={"center"}>
                    {i.value}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Text color={"gray.500"} mt={"1rem"}>
              {Math.round(sumDurationSeconds / 60)} minutes / {sumVideos} videos indexed
            </Text>
          </>
        )}

        {/*results */}
        <Flex px={"1rem"} w={"100%"} gap={"1rem"} justifyContent={"center"} flexWrap={"wrap"} flexDir={"row"} mt={["2rem", "4rem"]}>
          {loading ? (
            <Masonry
              breakpointCols={{
                default: 4,
                1200: 2,
                700: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {new Array(8).fill(0).map((data, index) => (
                <Flex key={index} marginBottom={"30px"}>
                  <ReactSingleLoader height={index % 2 ? 300 : 400} width={isMobile ? window.innerWidth - 50 : undefined} />
                </Flex>
              ))}
            </Masonry>
          ) : (
            <ResultList
              results={results}
              searchEmbeddingQuery={searchEmbeddingQuery}
              onSummaryClick={(index) => summaryModalRef.current?.open(index)}
              onChatClick={(index) => (isAuth ? chatSectionRef.current?.open(index) : openAuthModal())}
            />
          )}
        </Flex>
        <SummaryModal ref={summaryModalRef} />
        <ChatSection ref={chatSectionRef} />
        <IndexVideoModal ref={indexVideoModalRef} />
      </Flex>

      {/*footer */}
      <Flex mt={"5rem"} alignItems={"center"} flexDir={"column"}>
        <Text fontWeight={"500"} fontSize={"sm"} mb={"1rem"}>
          Powered by
        </Text>
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"0.5rem"}>
          {[
            {
              img_url: "/supabase.png",
              url: "https://supabase.com",
            },
            {
              img_url: "/vercel.png",
              url: "https://vercel.com",
            },
            {
              img_url: "/jigsawstack.jpg",
              url: "https://jigsawstack.com",
            },
            {
              img_url: "/hasura.png",
              url: "https://hasura.com",
            },
            {
              img_url: "/flyio.png",
              url: "https://fly.io",
            },
          ].map((brand) => (
            <Box as={"a"} key={brand.img_url} href={brand.url} target={"_blank"}>
              <Flex
                cursor={"pointer"}
                _hover={{
                  borderColor: "teal.500",
                }}
                w={"2.5rem"}
                h={"2.5rem"}
                borderWidth={"1px"}
                p={"0.5rem"}
                borderRadius={"md"}
                borderColor={"gray.300"}
              >
                <Image src={brand.img_url} objectFit={"contain"} alt={"Supabase"} borderRadius={"md"} />
              </Flex>
            </Box>
          ))}
        </Flex>

        <Text mt={"1.5rem"} color={"gray.600"} fontSize={"sm"} fontWeight={"500"}>
          <Box as={"a"} href={"https://github.com/yoeven/ai-video-search-engine"} cursor={"pointer"} target={"_blank"}>
            View code on Github
          </Box>{" "}
          or{" "}
          <Box as={"a"} href={"https://x.com/yoeven"} cursor={"pointer"} target={"_blank"} color={"black"}>
            follow me on X
          </Box>
        </Text>
      </Flex>
    </Layout>
  );
};

export default Home;
