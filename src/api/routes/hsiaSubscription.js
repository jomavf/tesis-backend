const express = require("express");
const router = express.Router();
const hsiaSubscription = require("../../controllers/hsiaSubscriptionController");

router.get("/", hsiaSubscription.getAll);

module.exports = router;
