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
  await knex(tableNames.guest).del();
  await knex.table(tableNames.guest).insert([
    {
      first_name: "Alonso",
      last_name: "Arias Cespedes",
      document_number: "58473622",
      document_type: "dni",
      email: "alonso_arias@gmail.com",
      address: "SJL Chosica",
      number_phone: "910234123",
      city: "Santiago",
      country: "Chile",
      active: true,
    },
    {
      first_name: "Eduardo",
      last_name: "Arellanos",
      document_number: "58172222",
      document_type: "dni",
      email: "eduardo_arrechanos@gmail.com",
      address: "El Agostino",
      number_phone: "9102222123",
      city: "Lima",
      country: "Peru",
      active: true,
    },
  ]);

  await knex(tableNames.reservation_spa).del();
  await knex.table(tableNames.reservation_spa).insert([]);

  await knex(tableNames.reservation_event).del();
  await knex.table(tableNames.reservation_event).insert([]);

  await knex(tableNames.reservation_local).del();
  await knex.table(tableNames.reservation_local).insert([]);

  await knex(tableNames.reservation_restaurant).del();
  await knex.table(tableNames.reservation_restaurant).insert([]);

  await knex(tableNames.reservation_gym).del();
  await knex.table(tableNames.reservation_gym).insert([]);

  await knex(tableNames.product_category).del();
  await knex.table(tableNames.product_category).insert([
    {
      name: "Postres",
      active: true,
    },
    {
      name: "Licores",
      active: true,
    },
    {
      name: "Bebidas",
      active: true,
    },
    {
      name: "Piqueos",
      active: true,
    },
  ]);

  await knex(tableNames.product).del();
  await knex.table(tableNames.product).insert([
    {
      name: "Chocolate Vinotinto",
      description:
        "El mejor postre del hotel, recomendacion especial del chef.",
      price: 9.99,
      quantity: 40,
      has_stock: true,
      active: true,
      product_category_id: 1,
    },
    {
      name: "Wisky Limenio",
      description:
        "Wisky Limenio Hecho con las mejores uvas de las afueras de Lima.",
      price: 99.99,
      quantity: 10,
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Inka cola",
      description: "La mejor bebida del Peru.",
      price: 4.99,
      quantity: 29,
      has_stock: true,
      active: true,
      product_category_id: 3,
    },
    {
      name: "Papitas Chips",
      description:
        "Ricas papas crocantes hechas con las mejores papas del Peru",
      price: 2.99,
      quantity: 19,
      has_stock: true,
      active: true,
      product_category_id: 4,
    },
  ]);

  await knex(tableNames.account).del();
  await knex.table(tableNames.account).insert([]);

  await knex(tableNames.devices).del();
  await knex.table(tableNames.devices).insert([]);

  await knex(tableNames.room).del();
  await knex.table(tableNames.room).insert([]);

  await knex(tableNames.check_in).del();
  await knex.table(tableNames.check_in).insert([]);

  await knex(tableNames.administrator).del();
  await knex.table(tableNames.administrator).insert([
    {
      email: "jose@gmail.com",
      password: "F",
    },
  ]);

  await knex(tableNames.hsia_package).del();
  await knex.table(tableNames.hsia_package).insert([]);

  await knex(tableNames.hsia_subscription).del();
  await knex.table(tableNames.hsia_subscription).insert([]);

  await knex(tableNames.dish_type).del();
  await knex.table(tableNames.dish_type).insert([]);

  await knex(tableNames.dish).del();
  await knex.table(tableNames.dish).insert([]);

  await knex(tableNames.transaction).del();
  await knex.table(tableNames.transaction).insert([]);

  await knex(tableNames.in_room_service_types).del();
  await knex.table(tableNames.in_room_service_types).insert([]);

  await knex(tableNames.in_room_services).del();
  await knex.table(tableNames.in_room_services).insert([]);

  await knex(tableNames.in_room_service_history).del();
  await knex.table(tableNames.in_room_service_history).insert([]);

  await knex(tableNames.local_guides).del();
  await knex.table(tableNames.local_guides).insert([]);

  await knex(tableNames.touristic_places).del();
  await knex.table(tableNames.touristic_places).insert([]);
};
