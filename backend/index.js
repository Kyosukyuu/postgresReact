require("dotenv").config();

const app = require("express")();
const PORT = process.env.PORT || 1337;

const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PW } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW, {
  host: "localhost",
  dialect: "postgres",
});

require("./testDB")(sequelize);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
