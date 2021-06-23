import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const CardList = () => {
  return (
    <SimpleGrid columns={4} spacing={8} as="article">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
};

export default CardList;
