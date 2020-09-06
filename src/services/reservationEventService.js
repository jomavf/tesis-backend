const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.reservationEvent;
const eventTable = tableNames.event;
const guestTable = tableNames.guest;
/**
 * @param {Knex} knex
 */
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

async function getAll({ name = null }) {
  let reservations = [];
  const domain = "event";

  reservations = await Knex(tableName)
    .join(eventTable, `${eventTable}.id`, "=", `${tableName}.${domain}_id`)
    .join(guestTable, `${guestTable}.id`, "=", `${tableName}.guest_id`).select(`
      ${tableName}.*
    `);
  const newReservations = [];
  for await (r of reservations) {
    const domainKey = `${domain}_id`;
    const guestKey = "guest_id";
    const domainId = r[domainKey];
    const guestId = r[guestKey];
    const [domainData] = await Knex(eventTable)
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
  upsert,
  getAll,
  updateById,
  deleteById,
};
