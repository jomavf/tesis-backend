const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const localTableName = tableNames.local;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(localTableName)
      .select()
      .where(`${localTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(localTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
