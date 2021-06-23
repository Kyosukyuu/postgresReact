const router = require("express").Router();
const { getAllChars, getChar } = require("../helper");

router.get("/all", (req, res) => {
  getAllChars().then((allChars) => {
    res.send(allChars);
  });
});

router.get("/find/:charName", (req, res) => {
  getChar(req.params.charName).then((char) => {
    res.send(char);
  });
});

module.exports = router;
