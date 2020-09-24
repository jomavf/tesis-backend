const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const tableName = tableNames.product;
const productCategorytableName = tableNames.productCategory;
/**
 * @param {Knex} knex
 */

const domain = "product_category";

async function create(data) {
  return await Knex(tableName)
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
    return await Knex(tableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    //update
    return await Knex(tableName)
      .where("id", "=", data.id)
      .update({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  }
}

async function getAll({ name = null, category_id = null }) {
  let products = [];
  if (name) {
    products = await Knex(tableName)
      .select()
      .where(`${tableName}.name`, "ilike", `%${name}%`);
  } else if (category_id) {
    products = await Knex(tableName)
      .select()
      .where(`${tableName}.product_category_id`, "=", `${category_id}`);
  } else {
    products = await Knex(tableName).select();
  }

  const productWithCategory = [];

  for await (const product of products) {
    const category = await Knex(productCategorytableName)
      .select()
      .where(`id`, "=", `${product.product_category_id}`);
    productWithCategory.push({
      ...product,
      category: category.length > 0 ? category[0] : null,
    });
  }
  return productWithCategory;
}

function updateById() {}

async function deleteById(id) {
  return await Knex(tableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
