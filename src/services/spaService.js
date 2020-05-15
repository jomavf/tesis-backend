const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const spaTableName = tableNames.spa;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(spaTableName)
      .select()
      .where(`${spaTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(spaTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
