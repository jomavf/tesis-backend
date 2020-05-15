const express = require("express");
const router = express.Router();
const ReservationRestaurantController = require("../../controllers/reservationRestaurantController");

router.get("/", ReservationRestaurantController.getAll);
router.post("/", ReservationRestaurantController.create);

module.exports = router;
