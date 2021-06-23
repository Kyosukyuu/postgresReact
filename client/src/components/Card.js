import { Box, Heading } from "@chakra-ui/react";

const Card = (props) => {
  const allChars = props.data;

  return (
    <Box boxShadow="md" rounded="sm" bg="white" as="section">
      <Heading mx={3}>{allChars.name}</Heading>
    </Box>
  );
};

export default Card;
