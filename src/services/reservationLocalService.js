const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.reservationLocal;
const localTable = tableNames.local;
const guestTable = tableNames.guest;

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
  return await Knex(tableName)
    .insert({
      user_id: userId,
      local_id: localId,
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
  const domain = "local";

  reservations = await Knex(tableName)
    .join(localTable, `${localTable}.id`, "=", `${tableName}.${domain}_id`)
    .join(guestTable, `${guestTable}.id`, "=", `${tableName}.guest_id`).select(`
      ${tableName}.*
    `);
  const newReservations = [];
  for await (r of reservations) {
    const domainKey = `${domain}_id`;
    const guestKey = "guest_id";
    const domainId = r[domainKey];
    const guestId = r[guestKey];
    const [domainData] = await Knex(localTable)
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
  upsert,
  getAll,
  deleteById,
};
