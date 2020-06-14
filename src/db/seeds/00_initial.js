const Knex = require("knex");
const tableNames = require("./../../constants/tableNames");

/**
 * @param {Knex} knex
 */
exports.seed = async (knex) => {
  await knex(tableNames.restaurant).del();
  await knex.table(tableNames.restaurant).insert([
    {
      name: "Astrid y Gastón",
      description:
        "Astrid y Gastón Casa Moreyra es el restaurante estrella del famoso chef peruano, Gaston Acurio, el hombre responsable de haber llevado a la cocina peruana más allá de Sudamérica.",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "La Locanda Swissotel",
      description:
        "Excelente cocina gourmet en un espacio distinguido que te ofrece una experiencia absolutamente perfecta.El Restaurante La Locanda del Swissôtel en San Isidro te invita a disfrutar de los momentos que mereces en espacios finamente decorados con una atención de primer nivel.",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
  await knex(tableNames.spa).del();
  await knex.table(tableNames.spa).insert([
    {
      name: "Spa 1",
      description: "Super Spa",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Spa 2",
      description: "Super Spa 2",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
  await knex(tableNames.gym).del();
  await knex.table(tableNames.gym).insert([
    {
      name: "Megaforce",
      description: "Super Gym",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Fullbody Training",
      description: "Super Gym 2",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
  await knex(tableNames.local).del();
  await knex.table(tableNames.local).insert([
    {
      name: "Local 1",
      description: "Super Local",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Local 2",
      description: "Super Local 2",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
  await knex(tableNames.event).del();
  await knex.table(tableNames.event).insert([
    {
      name: "Evento 1",
      description: "Super evento",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Evento 2",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
};
