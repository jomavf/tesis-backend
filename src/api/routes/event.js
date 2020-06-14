const express = require("express");
const router = express.Router();
const EventController = require("../../controllers/eventController");

router.get("/", EventController.getAll);

module.exports = router;
