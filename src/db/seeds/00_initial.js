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
    },
    {
      name: "La Locanda Swissotel",
      description:
        "Excelente cocina gourmet en un espacio distinguido que te ofrece una experiencia absolutamente perfecta.El Restaurante La Locanda del Swissôtel en San Isidro te invita a disfrutar de los momentos que mereces en espacios finamente decorados con una atención de primer nivel.",
    },
  ]);
  await knex.table(tableNames.reservation_type).insert([
    {
      name: "RESTAURANT",
      description: "Restaurante",
    },
    {
      name: "SPA",
      description: "Spa",
    },
    {
      name: "GYM",
      description: "Gimnasio",
    },
    {
      name: "LOCAL_EVENT",
      description: "Local de Evento",
    },
  ]);
};
