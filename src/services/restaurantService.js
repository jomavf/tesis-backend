const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const restaurantTableName = tableNames.restaurant;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(restaurantTableName)
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
    return await Knex(restaurantTableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(restaurantTableName)
      .where("id", "=", data.id)
      .update({
        name: data.name,
        description: data.description,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}

async function getAll({ name }) {
  if (name) {
    return await Knex(restaurantTableName)
      .select()
      .where(`${restaurantTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(restaurantTableName).select();
}

async function updateById(id, data) {
  return await Knex(restaurantTableName)
    .where("id", "=", id)
    .update({
      name: data.name,
      description: data.description,
      updated_at: new Date().toISOString(),
    })
    .returning("*");
}

async function deleteById(id) {
  return await Knex(restaurantTableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
