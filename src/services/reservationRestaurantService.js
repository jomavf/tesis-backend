const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationRestaurantTable = tableNames.reservationRestaurant;
const restaurantTable = tableNames.restaurant;
const userTable = tableNames.user;

/**
 * @param {Knex} knex
 */

async function create({
  userId = null,
  spaId = null,
  description = null,
  startTime = new Date().toISOString(),
  endTime = null,
}) {
  if (!userId || !restaurantId) {
    throw new Error('Especificar el campo "userId" o "restaurantId"');
  }
  return await Knex(reservationRestaurantTable)
    .insert({
      user_id: userId,
      restaurant_id: restaurantId,
      description: description,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}

async function getAll() {
  let reservations = [];

  reservations = await Knex(reservationRestaurantTable)
    .join(
      restaurantTable,
      `${restaurantTable}.id`,
      "=",
      `${reservationRestaurantTable}.restaurant_id`
    )
    .select();
  return reservations;
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
