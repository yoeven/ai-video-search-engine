import { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import Layout from "components/BaseComponents/Layout";
import Input from "components/BaseComponents/Input";

const Home: NextPage = () => {
  //https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=us&ds=yt&q=ted%20talk&callback=json

  const onSearch = async (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(`https://suggestqueries.google.com/complete/search?client=chrome&ds=bo&q=${encodedQuery}`);
    const data = await res.json();
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
          onChange={(e) => onSearch(e.target.value)}
        />
      </Flex>
    </Layout>
  );
};

export default Home;
