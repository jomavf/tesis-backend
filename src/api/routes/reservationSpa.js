const express = require("express");
const router = express.Router();
const ReservationSpaController = require("../../controllers/reservationSpaController");

router.get("/", ReservationSpaController.getAll);
router.post("/", ReservationSpaController.createOrUpdate);
router.delete("/:id", ReservationSpaController.deleteById);

module.exports = router;
