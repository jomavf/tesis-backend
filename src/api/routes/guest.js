const express = require("express");
const router = express.Router();
const guestController = require("../../controllers/guestController");

router.get("/", guestController.getAll);
router.post("/", guestController.createOrUpdate);

module.exports = router;
