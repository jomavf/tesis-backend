// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    // {
    //   database: process.env.POSTGRES_DATABASE,
    //   host: process.env.POSTGRES_HOST || "localhost",
    //   user: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    // },

    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
    useNullAsDefault: true,
  },
};
