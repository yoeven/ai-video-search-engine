import { NextPage } from "next";
import { Button, Flex, IconButton, MenuButton, Text } from "@chakra-ui/react";
import Layout from "components/BaseComponents/Layout";
import Input from "components/BaseComponents/Input";
import { useEffect, useRef, useState } from "react";
import { embedText } from "src/helpers/embedding";
import { gqlClient } from "src/helpers/graphqlClient";
import { GetMatchIndexesDocument, GetMatchIndexesQuery, GetMatchIndexesQueryVariables } from "@graphql/generated/graphql";
import ResultList from "components/ResultList";
import { pipeline } from "@xenova/transformers";
import ReactSingleLoader from "components/ResultLoader/singleLoader";
import Masonry from "react-masonry-css";
import SummaryModal, { ISummaryModalRef } from "components/SummaryModal";
import ChatSection, { IChatSectionRef } from "components/ChatSection";
import { useAuth } from "src/providers/AuthContext";
import { usePlatform } from "src/providers/PlatformContext";
import Icon from "components/BaseComponents/Icon";
import { IoMdMenu } from "react-icons/io";
import Menu from "components/BaseComponents/Menu";
import { signOut } from "src/helpers/authClientService";
import toast from "react-hot-toast";

const Home: NextPage = () => {
  const { isAuth, openAuthModal } = useAuth();
  const { isMobile } = usePlatform();
  const ref = useRef<HTMLInputElement>(null);
  const summaryModalRef = useRef<ISummaryModalRef>(null);
  const chatSectionRef = useRef<IChatSectionRef>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [results, setResults] = useState<GetMatchIndexesQuery["match_indexes"]>([]);
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
    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(`https://video-search-engine-ai.vercel.app/api/suggestions?query=${encodedQuery}`);
    const data = await res.json();
    setSuggestions(data.suggestions);
    console.log(data);
  };

  const onSearch = async (value: string) => {
    setLoading(true);
    const pipe = await pipeline("feature-extraction", "Supabase/gte-small");
    const e = await embedText(value, pipe);
    const searchEmbeddingQuery = e[0].embedding;

    const resp = await gqlClient.query<GetMatchIndexesQuery, GetMatchIndexesQueryVariables>({
      query: GetMatchIndexesDocument,
      variables: {
        query_embedding: JSON.stringify(searchEmbeddingQuery),
        match_threshold: 0.82,
      },
    });

    console.log(resp);

    setResults(resp.data.match_indexes);
    setSearchEmbeddingQuery(searchEmbeddingQuery);
    setLoading(false);
  };

  return (
    <Layout justifyContent={"center"}>
      <Flex pos={"relative"} flexDir={"column"} w={["100%", "lg"]}>
        <Flex>
          <Input
            ref={ref}
            placeholder={"Search or question"}
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

      <Flex mt={"1rem"} gap={["0.5rem", "1rem"]}>
        {[
          {
            value: "Human brain",
            query: "How does the human brain work?",
          },
          {
            value: "Learn Suapbase",
            query: "How to get started with Supabase?",
          },
          {
            value: "Startups",
            query: "How to start a startup?",
          },
          {
            value: "AI Image generation",
            query: "What are some ways to get started with AI image generation?",
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
    </Layout>
  );
};

export default Home;
