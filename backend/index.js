require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 1337;

const Sequelize = require("sequelize");

const { DB_NAME, DB_USER, DB_PW } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
  host: "localhost",
  dialect: "postgres",
});

const models = {
  Character: require("./models/Character")(sequelize, Sequelize),
};

// TEST DB CONNECTION
require("./testDB")(sequelize);

// call sync() to create tables from models if they don't exist yet.
sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Listening on PORT", PORT);
  });
});
