const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const eventReservationTableName = tableNames.reservationEvent;
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
async function upsert(data) {
  if (data.id == null) {
    // create
    return await Knex(tableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(tableName)
      .where("id", "=", data.id)
      .update({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}
async function deleteById(id) {
  return await Knex(tableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
