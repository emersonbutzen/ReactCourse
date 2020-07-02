const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "O servidor iniciou e está a correr." }).status(200);
});

module.exports = router;
