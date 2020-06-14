const express = require("express");
const router = express.Router();
const reservationEventController = require("../../controllers/reservationEventController");

router.get("/", reservationEventController.getAll);

module.exports = router;
