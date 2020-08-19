const express = require("express");
const router = express.Router();
const AdministratorController = require("../../controllers/administratorController");

router.post("/", AdministratorController.login);

module.exports = router;
