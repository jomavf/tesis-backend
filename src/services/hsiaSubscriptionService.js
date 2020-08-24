const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const hsiaSubscriptionTableName = tableNames.hsiaSubscription;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(hsiaSubscriptionTableName)
    .insert({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .returning("*");
}

async function upsert(data) {
  if (data.id == null) {
    // create
    return await Knex(hsiaSubscriptionTableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(hsiaSubscriptionTableName)
      .where("id", "=", data.id)
      .update({
        name: data.name,
        description: data.description,
        imgUrl: data.imgUrl,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}

async function getAll({ name = null }) {
  if (name) {
    return await Knex(hsiaSubscriptionTableName)
      .select()
      .where(`${hsiaSubscriptionTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(hsiaSubscriptionTableName).select();
}
function updateById() {}

async function deleteById(id) {
  return await Knex(hsiaSubscriptionTableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
