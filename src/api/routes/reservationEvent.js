const express = require("express");
const router = express.Router();
const reservationEventController = require("../../controllers/reservationEventController");

router.get("/", reservationEventController.getAll);
router.post("/", reservationEventController.createOrUpdate);
router.delete("/:id", reservationEventController.deleteById);

module.exports = router;
