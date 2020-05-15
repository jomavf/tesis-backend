const express = require("express");
const router = express.Router();
const restaurantsRouter = require("./restaurant");
const gymsRouter = require("./gym");
const localsRouter = require("./local");
const spasRouter = require("./spa");
const reservationRestaurantRouter = require("./reservationRestaurant");
const reservationLocalRouter = require("./reservationLocal");
const reservationSpaRouter = require("./reservationSpa");
const reservationGymRouter = require("./reservationGym");
const userRouter = require("./user");

router.use("/restaurants", restaurantsRouter);
router.use("/gyms", gymsRouter);
router.use("/locals", localsRouter);
router.use("/spas", spasRouter);

router.use("/user", userRouter);

router.use("/reservation-restaurant", reservationRestaurantRouter);
router.use("/reservation-local", reservationLocalRouter);
router.use("/reservation-spa", reservationSpaRouter);
router.use("/reservation-gym", reservationGymRouter);

module.exports = router;
