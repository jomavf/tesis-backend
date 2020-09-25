const express = require("express");
const router = express.Router();
const controller = require("../../controllers/touristicPlacesTypeController");

router.get("/", controller.getAll);
router.post("/", controller.createOrUpdate);
router.delete("/:id", controller.deleteById);

module.exports = router;
