const express = require("express");
const router = express.Router();
const ReservationSpaController = require("../../controllers/reservationSpaController");

router.get("/", ReservationSpaController.getAll);
router.post("/", ReservationSpaController.create);

module.exports = router;
