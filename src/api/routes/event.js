const express = require("express");
const router = express.Router();
const EventController = require("../../controllers/eventController");

router.get("/", EventController.getAll);
router.post("/", EventController.createOrUpdate);
router.delete("/:id", EventController.deleteById);
module.exports = router;
