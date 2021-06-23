import { Box, Heading } from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import CardList from "./CardList";

const Home = () => {
  return (
    <Box bg="gray.900" as="main">
      <Box bg="blue.200" pt={4} pb={7} mb={5} as="header">
        <Heading size="3xl" as="h1" textAlign="center">
          Genshin Impact
        </Heading>
        <SearchForm />
      </Box>
      <CardList />
    </Box>
  );
};

export default Home;
