import { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import Layout from "components/BaseComponents/Layout";
import Input from "components/BaseComponents/Input";
import { use, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!query.length) {
      setSuggestions([]);
      return;
    }
    const id = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => {
      id && clearTimeout(id);
    };
  }, [query]);

  const onSearch = async (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(`https://video-search-engine-ai.vercel.app/api/suggestions?query=${encodedQuery}`);
    const data = await res.json();
    setSuggestions(data.suggestions);
    console.log(data);
  };

  return (
    <Layout justifyContent={"center"}>
      <Text>hey</Text>
      <Flex w={"lg"}>
        <Input
          placeholder={"Search or question"}
          autoFocus
          borderRadius={"3xl"}
          py={"1.3rem"}
          px={"1rem"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Flex>
          {suggestions.map((suggestion) => (
            <Text key={suggestion}>{suggestion}</Text>
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;
