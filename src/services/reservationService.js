const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationTable = tableNames.reservation;
const restaurantTable = tableNames.restaurant;

/**
 * @param {Knex} knex
 */

async function create({ restaurantId, reservationTypeId, startTime, endTime }) {
  return await Knex(reservationTable)
    .insert({
      restaurant_id: restaurantId,
      reservation_type_id: reservationTypeId,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}
async function getAll() {
  return await Knex(reservationTable)
    .join(
      restaurantTable,
      `${restaurantTable}.id`,
      "=",
      `${reservationTable}.restaurant_id`
    )
    .select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
