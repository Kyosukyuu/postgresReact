require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 1337;

// DATABASE
const { sequelize } = require("./database");

// TEST DB CONNECTION
require("./testDB")(sequelize);

// ROUTES
const characterRoutes = require("./routes/character");
app.use("/character", characterRoutes);

// call sync() to create tables from models if they don't exist yet
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Listening on PORT", PORT);
  });
});
