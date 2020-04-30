const Knex = require("./../db/knex");
const tableNames = require("./../constants/tableNames");
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(tableNames.restaurant).select().where({ name });
  }
  return await Knex(tableNames.restaurant).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
