const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationLocalTable = tableNames.reservationLocal;
const localTable = tableNames.local;
const userTable = tableNames.user;

/**
 * @param {Knex} knex
 */

async function create({
  userId = null,
  localId = null,
  description = null,
  startTime = new Date().toISOString(),
  endTime = null,
}) {
  if (!userId || !localId) {
    throw new Error('Especificar el campo "userId" o "localId"');
  }
  return await Knex(reservationLocalTable)
    .insert({
      user_id: userId,
      local_id: localId,
      description: description,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}

async function getAll() {
  let reservations = [];

  reservations = await Knex(reservationLocalTable)
    .join(
      localTable,
      `${localTable}.id`,
      "=",
      `${reservationLocalTable}.local_id`
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
