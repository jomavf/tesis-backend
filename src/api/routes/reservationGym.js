const express = require("express");
const router = express.Router();
const ReservationGymController = require("../../controllers/reservationGymController");

router.get("/", ReservationGymController.getAll);
router.post("/", ReservationGymController.createOrUpdate);
router.delete("/:id", ReservationGymController.deleteById);

module.exports = router;
