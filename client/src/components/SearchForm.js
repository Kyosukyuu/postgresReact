import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { GenshinContext } from "../contexts/GenshinContext";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchErr, setSearchErr] = useState("");
  const genshin = useContext(GenshinContext);
  // console.log(allChars);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const submitSearch = () => {
    validateResponse();
  };
  const clearSearch = () => {
    setSearchTerm("");
    setSearchErr("");
  };

  const validateResponse = () => {
    let termFiltered = genshin.allCharsData.filter(
      (char) => char.name === searchTerm.toLowerCase().trim()
    );
    if (termFiltered.length === 0)
      setSearchErr("Character does not exist");
    else setSearchErr("");
  };

  return (
    <Center mb="-110px">
      <FormControl
        bg="white"
        px={4}
        py={6}
        mt={5}
        mb={10}
        mx={5}
        maxWidth="720px"
        height="135px"
        rounded="md"
        boxShadow="md"
        isInvalid={searchErr === "" ? false : true}
      >
        <FormLabel htmlFor="charName">Search a Character</FormLabel>
        <Flex>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="ex: bennett"
            id="charName"
            bg="gray.100"
            borderColor="gray.400"
          />
          <Button
            onClick={submitSearch}
            ml={4}
            mr={2}
            colorScheme="linkedin"
          >
            Search
          </Button>
          <Button onClick={clearSearch} colorScheme="red">
            Clear
          </Button>
        </Flex>
        <FormErrorMessage>{searchErr}</FormErrorMessage>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
    </Center>
  );
};

export default SearchForm;
