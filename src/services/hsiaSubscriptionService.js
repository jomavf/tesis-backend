const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");

const hsiaSubscriptionTableName = tableNames.hsiaSubscription;
const guestTableName = tableNames.guest;
const hsiaPackageTableName = tableNames.hsiaPackage;
/**
 * @param {Knex} knex
 */

async function create(data) {
  return await Knex(hsiaSubscriptionTableName)
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
    return await Knex(hsiaSubscriptionTableName)
      .insert({
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  } else {
    console.log(data);
    //update
    return await Knex(hsiaSubscriptionTableName)
      .where("id", "=", data.id)
      .update({
        is_accepted: data.is_accepted,
        active: data.active,
      })
      .returning("*");
  }
}

async function getAll({ name = null, active = null }) {
  let hsiaSubscriptionItems = [];
  if (name) {
    hsiaSubscriptionItems = await Knex(hsiaSubscriptionTableName)
      .select()
      .where(`${hsiaSubscriptionTableName}.name`, "ilike", `%${name}%`);
  } else if (active) {
    hsiaSubscriptionItems = await Knex(hsiaSubscriptionTableName)
      .select()
      .where(`${hsiaSubscriptionTableName}.active`, "=", `${active}`);
  } else {
    hsiaSubscriptionItems = await Knex(hsiaSubscriptionTableName).select();
  }
  let hsiaSubscriptionItemsPopulated = [];

  for await (const hsiaSub of hsiaSubscriptionItems) {
    let [guest] = await Knex(guestTableName)
      .select()
      .where("id", "=", hsiaSub.guest_id);

    let [hsia_package] = await Knex(hsiaPackageTableName)
      .select()
      .where("id", "=", hsiaSub.hsia_package_id);
    hsiaSubscriptionItemsPopulated.push({
      ...hsiaSub,
      guest,
      hsia_package,
    });
  }
  return hsiaSubscriptionItemsPopulated;
}
function updateById() {}

async function deleteById(id) {
  return await Knex(hsiaSubscriptionTableName).where("id", "=", id).del();
}

module.exports = {
  create,
  upsert,
  getAll,
  updateById,
  deleteById,
};
