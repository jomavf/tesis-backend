const express = require("express");
const router = express.Router();
const SpaController = require("../../controllers/spaController");

router.get("/", SpaController.getAll);
router.post("/", SpaController.createOrUpdate);
router.delete("/:id", SpaController.deleteById);

module.exports = router;
