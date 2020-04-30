const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.reservation;

/**
 * @param {Knex} knex
 */

async function create({ restaurantId, reservationTypeId, startTime, endTime }) {
  return await Knex(tableName)
    .insert({
      restaurant_id: restaurantId,
      reservation_type_id: reservationTypeId,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}
async function getAll() {
  return await Knex(tableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
