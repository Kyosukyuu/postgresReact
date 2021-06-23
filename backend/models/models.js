const { Sequelize, sequelize } = require("../database");

const models = {
  Character: require("./Character")(sequelize, Sequelize),
};

module.exports = models;
