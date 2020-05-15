const express = require("express");
const router = express.Router();
const LocalController = require("../../controllers/localController");

router.get("/", LocalController.getAll);

module.exports = router;
