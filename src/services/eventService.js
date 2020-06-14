const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const eventTableName = tableNames.event;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name = null }) {
  if (name) {
    return await Knex(eventTableName)
      .select()
      .where(`${eventTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(eventTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
