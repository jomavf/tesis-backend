const express = require("express");
const router = express.Router();
const RestaurantController = require("./../../controllers/restaurantController");

router.get("/", RestaurantController.getAll);
router.post("/", RestaurantController.createOrUpdate);
router.delete("/:id", RestaurantController.deleteById);

module.exports = router;
