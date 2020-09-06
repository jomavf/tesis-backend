const express = require("express");
const router = express.Router();
const LocalController = require("../../controllers/localController");

router.get("/", LocalController.getAll);
router.post("/", LocalController.createOrUpdate);
router.delete("/:id", LocalController.deleteById);

module.exports = router;
