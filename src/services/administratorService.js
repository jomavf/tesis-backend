const { v4: uuidv4 } = require("uuid");
const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const administratorTableName = tableNames.administrator;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(administratorTableName)
      .select()
      .where(`${administratorTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(administratorTableName).select();
}

async function login(data) {
  const { email = null, password = null } = data;
  if (email == null || password == null) {
    throw new Error("Email and password are needed!");
  }
  const [user] = await Knex(administratorTableName)
    .select()
    .where(`${administratorTableName}.email`, "=", `${email}`);
  if (user.email === email.trim() && user.password === password.trim()) {
    return {
      token: uuidv4(),
    };
  } else {
    throw new Error("Las credenciales no son válidas");
  }
}

module.exports = {
  create,
  login,
  getAll,
};
