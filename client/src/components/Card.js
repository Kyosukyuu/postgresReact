import { Box, Heading } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box boxShadow="md" rounded="md" bg="white" as="section">
      <Heading mx={3}>Name</Heading>
    </Box>
  );
};

export default Card;
