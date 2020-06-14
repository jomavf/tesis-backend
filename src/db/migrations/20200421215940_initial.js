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
    await Knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      table.string("username", 100).notNullable();
      table.string("password", 100).notNullable();
      addDefaultColumns(table);
    }),
    await Knex.schema.createTable(tableNames.restaurant, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      table.string("imgUrl", 300).notNullable();
      addDefaultColumns(table);
    }),
    await Knex.schema.createTable(tableNames.spa, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      table.string("imgUrl", 300).notNullable();
      addDefaultColumns(table);
    }),
    await Knex.schema.createTable(tableNames.gym, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      table.string("imgUrl", 300).notNullable();
      addDefaultColumns(table);
    }),
    await Knex.schema.createTable(tableNames.local, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      table.string("imgUrl", 300).notNullable();
      addDefaultColumns(table);
    }),
    await Knex.schema.createTable(tableNames.event, (table) => {
      table.increments().notNullable();
      table.string("name", 100).notNullable();
      table.string("description", 300).notNullable();
      table.string("imgUrl", 300).notNullable();
      addDefaultColumns(table);
    }),
  ]);

  await Knex.schema.createTable(tableNames.reservation_spa, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.spa);
    references(table, tableNames.user);
  });
  await Knex.schema.createTable(tableNames.reservation_event, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.event);
    references(table, tableNames.user);
  });
  await Knex.schema.createTable(tableNames.reservation_local, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.local);
    references(table, tableNames.user);
  });
  await Knex.schema.createTable(tableNames.reservation_restaurant, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.restaurant);
    references(table, tableNames.user);
  });
  await Knex.schema.createTable(tableNames.reservation_gym, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.gym);
    references(table, tableNames.user);
  });
};

exports.down = async (Knex) => {
  await Promise.all(
    [
      tableNames.reservation_gym,
      tableNames.reservation_local,
      tableNames.reservation_restaurant,
      tableNames.reservation_spa,
      tableNames.restaurant,
      tableNames.gym,
      tableNames.local,
      tableNames.spa,
      tableNames.user,
    ].map((tableName) => Knex.schema.dropTableIfExists(tableName))
  );
};
