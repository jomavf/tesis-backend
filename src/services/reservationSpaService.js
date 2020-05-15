const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationSpaTable = tableNames.reservation_spa;
const spaTable = tableNames.spa;
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
  if (!userId || !spaId) {
    throw new Error('Especificar el campo "userId" o "spaId"');
  }
  return await Knex(reservationSpaTable)
    .insert({
      user_id: userId,
      spa_id: spaId,
      description: description,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}

async function getAll() {
  let reservations = [];

  reservations = await Knex(reservationSpaTable)
    .join(spaTable, `${spaTable}.id`, "=", `${reservationSpaTable}.spa_id`)
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
