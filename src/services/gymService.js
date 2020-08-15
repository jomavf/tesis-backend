const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const gymTableName = tableNames.gym;
/**
 * @param {Knex} knex
 */

function create() {}

async function getAll({ name = null }) {
  if (name) {
    return await Knex(gymTableName)
      .select()
      .where(`${gymTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(gymTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
