const tableNames = require("./../../constants/tableNames");
const { addDefaultColumns, references } = require("./../../lib/tableUtils");

/**
 * @param {Knex} knex
 */
exports.up = async (Knex) => {
  await Promise.all([
    await Knex.schema.createTable(tableNames.administrator, (table) => {
      table.increments().notNullable();
      table.string("email", 100).notNullable();
      table.string("password", 100).notNullable();
      addDefaultColumns(table);
    }),
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
  await Knex.schema.createTable(tableNames.hsiaPackage, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 250);
    table.integer("internet_speed");
    table.string("unit_measure", 250);
    table.integer("total_amount");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.guest, (table) => {
    table.increments().notNullable();
    table.string("first_name", 250);
    table.string("last_name", 250);
    table.string("document_number", 250);
    table.string("document_type", 250);
    table.string("email", 250);
    table.string("address", 250);
    table.string("number_phone", 250);
    table.string("city", 250);
    table.string("country", 250);
    table.boolean("inactive");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.hsiaSubscription, (table) => {
    table.increments().notNullable();
    table.boolean("is_accepted");
    table.boolean("is_active");
    table.string("accepted_by", 250);
    table.integer("number_days");
    table.timestamp("application_date", { precision: 6 }).notNullable();
    table.timestamp("acceptance_date", { precision: 6 }).notNullable();
    table.timestamp("cancellation_date", { precision: 6 }).notNullable();
    addDefaultColumns(table);
    references(table, tableNames.hsiaPackage);
    references(table, tableNames.administrator);
    references(table, tableNames.guest);
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
      tableNames.administrator,
    ].map((tableName) => Knex.schema.dropTableIfExists(tableName))
  );
};
