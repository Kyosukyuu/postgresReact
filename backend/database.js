const Sequelize = require("sequelize");

const { DB_NAME, DB_USER, DB_PW } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = { Sequelize, sequelize };
