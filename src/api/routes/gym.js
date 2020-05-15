const express = require("express");
const router = express.Router();
const GymController = require("../../controllers/gymController");

router.get("/", GymController.getAll);

module.exports = router;
