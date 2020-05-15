const express = require("express");
const router = express.Router();
const SpaController = require("../../controllers/spaController");

router.get("/", SpaController.getAll);

module.exports = router;
