const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.reservationSpa;
const spaTable = tableNames.spa;
const guestTable = tableNames.guest;

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
  return await Knex(tableName)
    .insert({
      user_id: userId,
      spa_id: spaId,
      description: description,
      start_time: startTime,
      end_time: endTime,
    })
    .returning("*");
}

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

async function getAll() {
  let reservations = [];
  const domain = "spa";

  reservations = await Knex(tableName)
    .join(spaTable, `${spaTable}.id`, "=", `${tableName}.${domain}_id`)
    .join(guestTable, `${guestTable}.id`, "=", `${tableName}.guest_id`).select(`
      ${tableName}.*
    `);
  const newReservations = [];
  for await (r of reservations) {
    const domainKey = `${domain}_id`;
    const guestKey = "guest_id";
    const domainId = r[domainKey];
    const guestId = r[guestKey];
    const [domainData] = await Knex(spaTable)
      .where("id", "=", domainId)
      .select();
    const [guest] = await Knex(guestTable).where("id", "=", guestId).select();
    newReservations.push({
      ...r,
      [domain]: domainData,
      guest,
    });
  }
  return newReservations;
}
async function deleteById(id) {
  return await Knex(tableName).where("id", "=", id).del();
}

module.exports = {
  create,
  getAll,
  upsert,
  deleteById,
};
