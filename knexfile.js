// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST || "localhost",
      user: process.env.POSTGRES_USER,
      port: 5432,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    },
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection:
      "postgres://gllchhjueskjpn:c5338be6a350dcb33c990167e11696df2faf5d439f290c2a216d28e38a3da348@ec2-18-206-84-251.compute-1.amazonaws.com:5432/doo4575l4vg63?sslmode=disable",
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
    useNullAsDefault: true,
  },
};
