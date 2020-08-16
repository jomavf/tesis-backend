const express = require("express");
const router = express.Router();
const GymController = require("../../controllers/gymController");

router.get("/", GymController.getAll);
router.post("/", GymController.createOrUpdate);
router.delete("/:id", GymController.deleteById);

module.exports = router;
