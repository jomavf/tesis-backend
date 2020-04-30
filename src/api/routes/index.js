const express = require("express");
const router = express.Router();
const restaurantsRouter = require("./restaurant");
const reservationRouter = require("./reservation");

router.use("/restaurants", restaurantsRouter);
router.use("/reservation", reservationRouter);

module.exports = router;
