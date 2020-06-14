const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const eventReservationTableName = tableNames.reservation_event;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name = null }) {
  if (name) {
    return await Knex(eventReservationTableName)
      .select()
      .where(`${eventReservationTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(eventReservationTableName).select();
}

function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
