import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import { useContext } from "react";
import { GenshinContext } from "../contexts/GenshinContext";

const CardList = () => {
  const genshin = useContext(GenshinContext);
  console.log(genshin.allCharsData);
  // console.log(allChars.data);
  return (
    <SimpleGrid mt={16} mx={5} columns={4} spacing={8} as="article">
      {genshin.allCharsData ? (
        genshin.allCharsData.map((chars) => (
          <Card data={chars} key={chars.id} />
        ))
      ) : (
        <></>
      )}
    </SimpleGrid>
  );
};

export default CardList;
