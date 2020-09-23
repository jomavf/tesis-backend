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
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("type", 300).notNullable();
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
  await Knex.schema.createTable(tableNames.reservationSpa, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.spa);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservationEvent, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.event);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.reservationLocal, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.local);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.dishType, (table) => {
    table.increments().notNullable();
    table.string("description", 250);
    table.boolean("active");
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.dish, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 250);
    table.string("small_description", 250);
    table.string("state", 250);
    table.string("photoUrl", 250);
    table.decimal("price", { precision: 6 }).notNullable();
    table.boolean("active");
    addDefaultColumns(table);
    references(table, tableNames.restaurant);
    references(table, tableNames.dishType);
  });
  await Knex.schema.createTable(tableNames.reservationRestaurant, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.restaurant);
    references(table, tableNames.guest);
    references(table, tableNames.dish);
  });
  await Knex.schema.createTable(tableNames.reservationGym, (table) => {
    table.increments().notNullable();
    table.timestamp("start_time", { precision: 6 }).notNullable();
    table.timestamp("end_time", { precision: 6 }).notNullable();
    table.string("description", 300);
    addDefaultColumns(table);
    references(table, tableNames.gym);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.productCategory, (table) => {
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
    references(table, tableNames.productCategory);
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
  await Knex.schema.createTable(tableNames.deviceTv, (table) => {
    table.increments().notNullable();
    table.string("code", 250);
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.deviceAlexa, (table) => {
    table.increments().notNullable();
    table.string("code", 250);
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.room, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.deviceAlexa);
    references(table, tableNames.deviceTv);
  });
  await Knex.schema.createTable(tableNames.checkIn, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    table.timestamp("start_date", { precision: 6 }).notNullable();
    table.timestamp("end_date", { precision: 6 }).notNullable();
    references(table, tableNames.room);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.administrator, (table) => {
    table.increments().notNullable();
    table.string("email", 100).notNullable();
    table.string("password", 100).notNullable();
    addDefaultColumns(table);
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
  await Knex.schema.createTable(tableNames.hsiaSubscription, (table) => {
    table.increments().notNullable();
    table.boolean("is_accepted");
    table.boolean("active");
    table.string("accepted_by", 250);
    table.integer("number_days");
    table.timestamp("application_date", { precision: 6 }).notNullable();
    table.timestamp("acceptance_date", { precision: 6 });
    table.timestamp("cancellation_date", { precision: 6 });
    addDefaultColumns(table);
    references(table, tableNames.hsiaPackage);
    references(table, tableNames.administrator, false);
    references(table, tableNames.guest);
  });
  // await Knex.schema.createTable(tableNames.dishType, (table) => {
  //   table.increments().notNullable();
  //   table.string("description", 250);
  //   table.boolean("active");
  //   addDefaultColumns(table);
  // });
  // await Knex.schema.createTable(tableNames.dish, (table) => {
  //   table.increments().notNullable();
  //   table.string("name", 250);
  //   table.string("description", 250);
  //   table.string("small_description", 250);
  //   table.string("state", 250);
  //   table.string("photoUrl", 250);
  //   table.decimal("price", { precision: 6 }).notNullable();
  //   table.boolean("active");
  //   addDefaultColumns(table);
  //   references(table, tableNames.restaurant);
  //   references(table, tableNames.dishType);
  // });
  await Knex.schema.createTable(tableNames.transaction, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    table.timestamp("transaction_datetime", { precision: 6 }).notNullable();
    table.string("transaction_description", 250);
    table.string("currency_symbol", 250);
    table.decimal("amount", { precision: 2 });
    references(table, tableNames.dish, false);
    references(table, tableNames.guest);
    references(table, tableNames.product, false);
    references(table, tableNames.account, false);
  });
  await Knex.schema.createTable(tableNames.inRoomServiceTypes, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.inRoomServices, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.inRoomServiceTypes);
  });
  await Knex.schema.createTable(tableNames.inRoomServiceHistory, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
    references(table, tableNames.inRoomServices);
    references(table, tableNames.guest);
  });
  await Knex.schema.createTable(tableNames.localGuides, (table) => {
    table.increments().notNullable();
    addDefaultColumns(table);
  });
  await Knex.schema.createTable(tableNames.touristicPlaces, (table) => {
    table.increments().notNullable();
    table.string("name", 250);
    table.string("description", 1000);
    table.string("img_url", 1000);
    table.string("address", 250);
    table.string("reference_address", 1000);
    addDefaultColumns(table);
  });
};

exports.down = async (Knex) => {
  return Knex.schema
    .dropTableIfExists(tableNames.touristicPlaces)
    .dropTableIfExists(tableNames.localGuides)
    .dropTableIfExists(tableNames.inRoomServiceHistory)
    .dropTableIfExists(tableNames.inRoomServices)
    .dropTableIfExists(tableNames.inRoomServiceTypes)
    .dropTableIfExists(tableNames.transaction)
    .dropTableIfExists(tableNames.dish)
    .dropTableIfExists(tableNames.dishType)
    .dropTableIfExists(tableNames.hsiaSubscription)
    .dropTableIfExists(tableNames.hsiaPackage)
    .dropTableIfExists(tableNames.administrator)
    .dropTableIfExists(tableNames.checkIn)
    .dropTableIfExists(tableNames.room)
    .dropTableIfExists(tableNames.deviceAlexa)
    .dropTableIfExists(tableNames.deviceTv)
    .dropTableIfExists(tableNames.account)
    .dropTableIfExists(tableNames.product)
    .dropTableIfExists(tableNames.productCategory)
    .dropTableIfExists(tableNames.reservationGym)
    .dropTableIfExists(tableNames.reservationRestaurant)
    .dropTableIfExists(tableNames.reservationLocal)
    .dropTableIfExists(tableNames.reservationEvent)
    .dropTableIfExists(tableNames.reservationSpa)
    .dropTableIfExists(tableNames.guest)
    .dropTableIfExists(tableNames.event)
    .dropTableIfExists(tableNames.local)
    .dropTableIfExists(tableNames.gym)
    .dropTableIfExists(tableNames.spa)
    .dropTableIfExists(tableNames.restaurant);
};
