require("dotenv").config();

const app = require("express")();
const PORT = 1337;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
