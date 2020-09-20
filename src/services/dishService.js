const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.dish;
const restaurantTableName = tableNames.restaurant;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(tableName)
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

async function getAll({ name = null, restaurant_id = null }) {
  console.log(restaurant_id);
  if (name) {
    return await Knex(tableName)
      .select()
      .where(`${tableName}.name`, "ilike", `%${name}%`);
  }
  if (restaurant_id) {
    return await Knex(tableName)
      .select()
      .where(`${tableName}.restaurant_id`, "=", restaurant_id);
  }

  return await Knex(tableName).select();
}
function updateById() {}

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
