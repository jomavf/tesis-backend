const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const gymTableName = tableNames.gym;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(gymTableName)
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
    return await Knex(gymTableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(gymTableName)
      .where("id", "=", data.id)
      .update({
        name: data.name,
        description: data.description,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}

async function getAll({ name = null }) {
  if (name) {
    return await Knex(gymTableName)
      .select()
      .where(`${gymTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(gymTableName).select();
}
function updateById() {}

async function deleteById(id) {
  return await Knex(gymTableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
