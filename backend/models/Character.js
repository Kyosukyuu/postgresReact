const character = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: { type: DataTypes.STRING, allowNull: false },
    element: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weapon: { type: DataTypes.STRING, allowNull: false },
    rarity: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Character;
};

module.exports = character;
