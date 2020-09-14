const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const hsiaPackageTableName = tableNames.hsiaPackage;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(hsiaPackageTableName)
    .insert({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .returning("*");
}

async function upsert(data) {
  if (data.id == null) {
    // create
    return await Knex(hsiaPackageTableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(hsiaPackageTableName)
      .where("id", "=", data.id)
      .update({
        name: data.name,
        description: data.description,
        imgUrl: data.imgUrl,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}

async function getAll({ name = null }) {
  let hsiaPackages = [];
  if (name) {
    hsiaPackages = await Knex(hsiaPackageTableName)
      .select()
      .where(`${hsiaPackageTableName}.name`, "ilike", `%${name}%`);
  } else {
    hsiaPackages = await Knex(hsiaPackageTableName).select();
  }
  return hsiaPackages;
}

function updateById() {}

async function deleteById(id) {
  return await Knex(hsiaPackageTableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
