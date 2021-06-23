import CardList from "./components/CardList";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Box as="main" bg="gray.200">
        <Box bg="blue.300" mb={6} py={4} as="header">
          <Heading>Genshin Impact</Heading>
        </Box>
        <CardList />
      </Box>
    </ChakraProvider>
  );
};

export default App;
