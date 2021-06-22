const character = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Character;
};

module.exports = character;
