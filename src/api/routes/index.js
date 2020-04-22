const express = require("express");
const router = express.Router();
const restaurantsRouter = require("./restaurant");

router.use("/restaurants", restaurantsRouter);

module.exports = router;
