const Knex = require("knex");
const tableNames = require("./../../constants/tableNames");
const {
  addDefaultColumns,
  createNameTable,
  references,
} = require("./../../lib/tableUtils");

/**
 * @param {Knex} knex
 */
exports.up = async (Knex) => {
  await Promise.all([
    await Knex.schema.createTable(tableNames.restaurant, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      addDefaultColumns(table);
    }),

    await Knex.schema.createTable(tableNames.reservation_type, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      addDefaultColumns(table);
    }),
  ]);

  await Knex.schema.createTable(tableNames.reservation, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.reservation_type);
    references(table, tableNames.restaurant);
  });
};

exports.down = async (Knex) => {
  await Promise.all(
    [
      tableNames.reservation,
      tableNames.restaurant,
      tableNames.reservation_type,
    ].map((tableName) => Knex.schema.dropTableIfExists(tableName))
  );
};
