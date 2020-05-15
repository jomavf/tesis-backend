const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationGymTable = tableNames.reservation_gym;
const gymTable = tableNames.gym;
const userTable = tableNames.user;

/**
 * @param {Knex} knex
 */

async function create({
  userId = null,
  gymId = null,
  description = null,
  startTime = new Date().toISOString(),
  endTime = null,
}) {
  if (!userId || !gymId) {
    throw new Error('Especificar el campo "userId" o "gymId"');
  }
  return await Knex(reservationGymTable)
    .insert({
      user_id: userId,
      gym_id: gymIf,
      description: description,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}

async function getAll() {
  let reservations = [];

  reservations = await Knex(reservationGymTable)
    .join(gymTable, `${gymTable}.id`, "=", `${reservationGymTable}.gym_id`)
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
