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
      type: "musica",
    },
    {
      name: "Evento 2",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "arte",
    },
    {
      name: "Evento 3",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "moda",
    },
    {
      name: "Evento 4",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "charlas",
    },
    {
      name: "Evento 5",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "teatro",
    },
    {
      name: "Evento 6",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "moda",
    },
    {
      name: "Evento 7",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "arte",
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

  await knex(tableNames.reservationSpa).del();
  await knex.table(tableNames.reservationSpa).insert([]);

  await knex(tableNames.reservationEvent).del();
  await knex.table(tableNames.reservationEvent).insert([]);

  await knex(tableNames.reservationLocal).del();
  await knex.table(tableNames.reservationLocal).insert([]);

  await knex(tableNames.reservationRestaurant).del();
  await knex.table(tableNames.reservationRestaurant).insert([]);

  await knex(tableNames.reservationGym).del();
  await knex.table(tableNames.reservationGym).insert([]);

  await knex(tableNames.productCategory).del();
  await knex.table(tableNames.productCategory).insert([
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
      img_url:
        "https://enelbreak.com/buen-provecho/wp-content/uploads/2017/07/torta-chocolate-vinotinto.jpeg",
      active: true,
      product_category_id: 1,
    },
    {
      name: "Wisky Limenio",
      img_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hiconsumption.com%2Fwp-content%2Fuploads%2F2017%2F02%2FBest-Blended-Scotch.jpg&f=1&nofb=1",
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
      img_url: "http://upload.wikimedia.org/wikipedia/en/9/9d/Inca_Kola.jpg",
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
      img_url:
        "http://snackmachinery.es/upload/3642/o/1-21-1-fresh-potato-chips-processing-line-11.jpg",
      active: true,
      product_category_id: 4,
    },
  ]);

  await knex(tableNames.account).del();
  await knex.table(tableNames.account).insert([]);

  await knex(tableNames.deviceAlexa).del();
  await knex
    .table(tableNames.deviceAlexa)
    .insert([
      { code: "1" },
      { code: "2" },
      { code: "3" },
      { code: "4" },
      { code: "5" },
      { code: "6" },
      { code: "7" },
    ]);
  await knex(tableNames.deviceTv).del();
  await knex
    .table(tableNames.deviceTv)
    .insert([
      { code: "1" },
      { code: "2" },
      { code: "3" },
      { code: "4" },
      { code: "5" },
      { code: "6" },
      { code: "7" },
    ]);

  await knex(tableNames.room).del();
  await knex.table(tableNames.room).insert([
    { device_alexa_id: "1", device_tv_id: "1" },
    { device_alexa_id: "2", device_tv_id: "2" },
    { device_alexa_id: "3", device_tv_id: "3" },
    { device_alexa_id: "4", device_tv_id: "4" },
    { device_alexa_id: "5", device_tv_id: "5" },
    { device_alexa_id: "6", device_tv_id: "6" },
  ]);

  await knex(tableNames.checkIn).del();
  await knex.table(tableNames.checkIn).insert([]);

  await knex(tableNames.administrator).del();
  await knex.table(tableNames.administrator).insert([
    {
      email: "jose@gmail.com",
      password: "u201315486",
    },
  ]);

  await knex(tableNames.hsiaPackage).del();
  await knex.table(tableNames.hsiaPackage).insert([]);

  await knex(tableNames.hsiaPackage).del();
  await knex.table(tableNames.hsiaPackage).insert([]);

  await knex(tableNames.dishType).del();
  await knex.table(tableNames.dishType).insert([]);

  await knex(tableNames.dish).del();
  await knex.table(tableNames.dish).insert([]);

  await knex(tableNames.transaction).del();
  await knex.table(tableNames.transaction).insert([]);

  await knex(tableNames.inRoomServiceTypes).del();
  await knex.table(tableNames.inRoomServiceTypes).insert([]);

  await knex(tableNames.inRoomServices).del();
  await knex.table(tableNames.inRoomServices).insert([]);

  await knex(tableNames.inRoomServiceHistory).del();
  await knex.table(tableNames.inRoomServiceHistory).insert([]);

  await knex(tableNames.localGuides).del();
  await knex.table(tableNames.localGuides).insert([]);

  await knex(tableNames.touristicPlaces).del();
  await knex.table(tableNames.touristicPlaces).insert([]);
};
