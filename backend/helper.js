const models = require("./models/models");

const getAllChars = async () => {
  const allCharacters = await models.Character.findAll({ raw: true });
  // console.log(allCharacters);
  return allCharacters;
};

const getChar = async (charName) => {
  const currentChar = await models.Character.findOne({
    where: { name: charName },
    raw: true,
  });
  // console.log(currentChar);
  return currentChar;
};

module.exports = { getAllChars, getChar };
