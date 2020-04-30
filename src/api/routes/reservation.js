const express = require("express");
const router = express.Router();
const ReservationController = require("./../../controllers/reservationController");

router.get("/", ReservationController.getAll);
router.post("/", ReservationController.create);

module.exports = router;
