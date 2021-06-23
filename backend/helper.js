const { sequelize } = require("./database");
const models = require("./models/models");

const getAllChars = async () => {
  const allCharacters = await models.Character.findAll({
    order: [["name", "ASC"]],
    raw: true,
  });
  // console.log(allCharacters);
  return allCharacters;
};

const getChars = async (chars) => {
  const currentChars = await models.Character.findAll({
    where: { name: chars },
    order: [["name", "ASC"]],
    raw: true,
  });
  return currentChars;
};

const getChar = async (charName) => {
  const currentChar = await models.Character.findOne({
    where: { name: charName },
    raw: true,
  });
  // console.log(currentChar);
  return currentChar;
};

module.exports = { getAllChars, getChar, getChars };
