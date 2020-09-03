const tableNames = require("./../../constants/tableNames");
const { addDefaultColumns, references } = require("./../../lib/tableUtils");

/**
 * @param {Knex} knex
 */
exports.up = async (Knex) => {
  await Knex.schema.createTable(tableNames.restaurant, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    table.string("imgUrl", 300).notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.spa, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    table.string("imgUrl", 300).notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.gym, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    table.string("imgUrl", 300).notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.local, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    table.string("imgUrl", 300).notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.event, (table) => {
    table.increments().notNullable();
    table.string("name", 100).notNullable();
    table.string("description", 300).notNullable();
    table.string("imgUrl", 300).notNullable();
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
    table.boolean("active");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.reservation_spa, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.spa);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservation_event, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.event);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservation_local, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.local);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservation_restaurant, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.restaurant);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservation_gym, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.gym);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.product_category, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.boolean("active");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.product, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 250);
    table.decimal("price", { precision: 2 });
    table.integer("quantity");
    table.string("img_url");
    table.boolean("has_stock");
    table.boolean("active");
    addDefaultColumns(table);
    references(table, tableNames.product_category);
  });
  await Knex.schema.createTable(tableNames.account, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    table.string("currency_symbol", 250);
    table.decimal("total_amount", 250);
    table.timestamp("billing_date_start", { precision: 6 }).notNullable();
    table.timestamp("billing_date_end", { precision: 6 }).notNullable();

    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.devices, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.room, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.devices);
  });
  await Knex.schema.createTable(tableNames.check_in, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.room);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.administrator, (table) => {
    table.increments().notNullable();
    table.string("email", 100).notNullable();
    table.string("password", 100).notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.hsia_package, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 250);
    table.integer("internet_speed");
    table.string("unit_measure", 250);
    table.integer("total_amount");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.hsia_subscription, (table) => {
    table.increments().notNullable();
    table.boolean("is_accepted");
    table.boolean("active");
    table.string("accepted_by", 250);
    table.integer("number_days");
    table.timestamp("application_date", { precision: 6 }).notNullable();
    table.timestamp("acceptance_date", { precision: 6 }).notNullable();
    table.timestamp("cancellation_date", { precision: 6 }).notNullable();
    addDefaultColumns(table);
    references(table, tableNames.hsia_package);
    references(table, tableNames.administrator);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.dish_type, (table) => {
    table.increments().notNullable();
    table.string("description", 250);
    table.boolean("active");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.dish, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("state", 250);
    table.string("photoUrl", 250);
    table.timestamp("price", { precision: 6 }).notNullable();
    table.decimal("total_amount", { precision: 2 });
    table.boolean("active");
    addDefaultColumns(table);
    references(table, tableNames.restaurant);
    references(table, tableNames.dish_type);
  });
  await Knex.schema.createTable(tableNames.transaction, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    table.timestamp("transaction_datetime", { precision: 6 }).notNullable();
    table.string("transaction_description", 250);
    table.string("currency_symbol", 250);
    table.decimal("amount", { precision: 2 });
    references(table, tableNames.dish);
    references(table, tableNames.guest);
    references(table, tableNames.product);
    references(table, tableNames.account);
  });
  await Knex.schema.createTable(tableNames.in_room_service_types, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.in_room_services, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.in_room_service_types);
  });
  await Knex.schema.createTable(tableNames.in_room_service_history, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.in_room_services);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.local_guides, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.touristic_places, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 10000);
    table.string("address", 250);
    table.string("reference_address", 10000);
    addDefaultColumns(table);
  });
};

exports.down = async (Knex) => {
  await Promise.all(
    [
      tableNames.touristic_places,
      tableNames.local_guides,
      tableNames.in_room_service_history,
      tableNames.in_room_services,
      tableNames.in_room_service_types,
      tableNames.transaction,
      tableNames.dish,
      tableNames.dish_type,
      tableNames.hsia_subscription,
      tableNames.hsia_package,
      tableNames.administrator,
      tableNames.check_in,
      tableNames.room,
      tableNames.devices,
      tableNames.account,
      tableNames.product,
      tableNames.product_category,
      tableNames.reservation_gym,
      tableNames.reservation_restaurant,
      tableNames.reservation_local,
      tableNames.reservation_event,
      tableNames.reservation_spa,
      tableNames.guest,
      tableNames.event,
      tableNames.local,
      tableNames.gym,
      tableNames.spa,
      tableNames.restaurant,
    ].map((tableName) => Knex.schema.dropTableIfExists(tableName))
  );
};
