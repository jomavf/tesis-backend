const express = require("express");
const router = express.Router();
const ReservationLocalController = require("../../controllers/reservationLocalController");

router.get("/", ReservationLocalController.getAll);
router.post("/", ReservationLocalController.createOrUpdate);
router.delete("/:id", ReservationLocalController.deleteById);

module.exports = router;
