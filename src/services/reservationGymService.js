const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const reservationGymTable = tableNames.reservationGym;
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
      gym_id: gymId,
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
