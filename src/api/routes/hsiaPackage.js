const express = require("express");
const router = express.Router();
const hsiaPackageController = require("../../controllers/hsiaPackageController");

router.get("/", hsiaPackageController.getAll);
router.post("/", hsiaPackageController.createOrUpdate);

module.exports = router;
