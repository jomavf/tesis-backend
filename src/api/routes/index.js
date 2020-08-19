const express = require("express");
const router = express.Router();
const restaurantsRouter = require("./restaurant");
const gymsRouter = require("./gym");
const localsRouter = require("./local");
const spasRouter = require("./spa");
const eventsRouter = require("./event");
const reservationEventsRouter = require("./reservationEvent");
const reservationRestaurantRouter = require("./reservationRestaurant");
const reservationLocalRouter = require("./reservationLocal");
const reservationSpaRouter = require("./reservationSpa");
const reservationGymRouter = require("./reservationGym");
const userRouter = require("./user");
const administratorRouter = require("./administrator");

router.use("/restaurants", restaurantsRouter);
router.use("/gyms", gymsRouter);
router.use("/locals", localsRouter);
router.use("/spas", spasRouter);
router.use("/events", eventsRouter);

router.use("/user", userRouter);
router.use("/administrator", administratorRouter);

router.use("/reservation-event", reservationEventsRouter);
router.use("/reservation-restaurant", reservationRestaurantRouter);
router.use("/reservation-local", reservationLocalRouter);
router.use("/reservation-spa", reservationSpaRouter);
router.use("/reservation-gym", reservationGymRouter);

module.exports = router;
