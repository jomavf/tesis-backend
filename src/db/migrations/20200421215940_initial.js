const Knex = require("knex");
const tableNames = require("./../../constants/tableNames");

function addDefaultColumn(table) {
  table.timestamps(false, true);
  // table.datetime("deleted_at");
}

/**
 * @param {Knex} knex
 */
exports.up = async (Knex) => {
  await Knex.schema.createTable(tableNames.restaurant, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    addDefaultColumn(table);
  });
};

exports.down = async (Knex) => {
  await Knex.schema.dropTable(tableNames.restaurant);
};
