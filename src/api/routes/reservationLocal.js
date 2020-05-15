const express = require("express");
const router = express.Router();
const ReservationLocalController = require("../../controllers/reservationLocalController");

router.get("/", ReservationLocalController.getAll);
router.post("/", ReservationLocalController.create);

module.exports = router;
