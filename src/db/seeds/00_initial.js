const Knex = require("knex");
const tableNames = require("./../../constants/tableNames");

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  await knex(tableNames.restaurant).del();
  await knex.table(tableNames.restaurant).insert([
    { name: "Restaurante1", description: "Description1" },
    { name: "Restaurante2", description: "Description2" },
  ]);
};
