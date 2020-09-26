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
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 2",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "arte",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 3",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "moda",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 4",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "charlas",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 5",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "teatro",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 6",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "moda",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Evento 7",
      description: "Super Evento 2",
      imgUrl: "https://via.placeholder.com/150",
      type: "arte",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
  ]);
  await knex(tableNames.guest).del();
  await knex.table(tableNames.guest).insert([
    {
      first_name: "Kevin",
      last_name: "Riveros",
      document_number: "934732984",
      document_type: "dni",
      email: "kevin_riveros@gmail.com",
      address: "Av. San J. Miraflores",
      number_phone: "9423094383",
      city: "Lima",
      country: "Peru",
      active: true,
    },
    {
      first_name: "Sofia",
      last_name: "Castillo",
      document_number: "932847392",
      document_type: "dni",
      email: "sofia_castillo@gmail.com",
      address: "adventures work",
      number_phone: "9384374987",
      city: "Brazil",
      country: "Brazil",
      active: true,
    },
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
      name_en: "Desserts",
      name_po: "Sobremesas",
      img_url:
        "https://www.tunicaragua.com/images/stories/virtuemart/category/categorybanner_postres2.jpg",
      active: true,
    },
    {
      name: "Licores",
      name_en: "Spirits",
      name_po: "Espíritos",
      img_url:
        "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=104675271310582",
      active: true,
    },
    {
      name: "Bebidas",
      name_en: "Drinks",
      name_po: "Bebidas",
      img_url: "https://i.ytimg.com/vi/TWdIkh-A_uA/maxresdefault.jpg",
      active: true,
    },
    {
      name: "Piqueos",
      name_en: "Snacks",
      name_po: "Lanches",
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

      soles: 9.99,
      euro: 2.99,
      dollar: 3.99,

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

      soles: 99.99,
      euro: 29.99,
      dollar: 39.99,

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

      soles: 4.99,
      euro: 0.99,
      dollar: 1.99,

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

      soles: 2.99,
      euro: 0.59,
      dollar: 0.99,

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

  await knex(tableNames.configuration).del();
  await knex.table(tableNames.configuration).insert([
    {
      language: "español",
      currency: "soles", // euros, dolares
      should_show_on_boarding: true,
    },
    {
      language: "ingles",
      currency: "dolares", // euros, dolares
      should_show_on_boarding: false,
    },
    {
      language: "ingles",
      currency: "euros", // euros, dolares
      should_show_on_boarding: true,
    },
    {
      language: "portugues",
      currency: "euros", // euros, dolares
      should_show_on_boarding: true,
    },
  ]);

  await knex(tableNames.checkIn).del();
  await knex.table(tableNames.checkIn).insert([
    {
      room_id: 1,
      guest_id: 1,
      start_date: "2020-09-14T01:23:45.431Z",
      end_date: "2020-09-20T01:23:45.431Z",
      configuration_id: 1,
    },
    {
      room_id: 2,
      guest_id: 2,
      start_date: "2020-09-17T011:23:45.431Z",
      end_date: "2020-09-20T01:23:45.431Z",
      configuration_id: 2,
    },
  ]);

  await knex(tableNames.administrator).del();
  await knex.table(tableNames.administrator).insert([
    {
      email: "jose@gmail.com",
      password: "u201315486",
    },
  ]);

  await knex(tableNames.hsiaPackage).del();
  await knex.table(tableNames.hsiaPackage).insert([
    {
      name: "Personal",
      description: "",
      internet_speed: 5,
      unit_measure: "Mbps",
      total_amount: "15",
    },
    {
      name: "Premium",
      description: "",
      internet_speed: 50,
      unit_measure: "Mbps",
      total_amount: "70",
    },
    {
      name: "Coorporativo",
      description: "",
      internet_speed: 150,
      unit_measure: "Mbps",
      total_amount: "150",
    },
  ]);

  await knex(tableNames.hsiaSubscription).del();
  await knex.table(tableNames.hsiaSubscription).insert([
    {
      is_accepted: false,
      active: true,
      accepted_by: "",
      number_days: 10,
      application_date: "2020-09-14T02:43:45.255Z",
      cancellation_date: null,
      hsia_package_id: 2,
      administrator_id: null,
      guest_id: 2,
    },
    {
      is_accepted: false,
      active: true,
      accepted_by: "",
      number_days: 4,
      application_date: "2020-09-14T02:43:45.255Z",
      cancellation_date: null,
      hsia_package_id: 1,
      administrator_id: null,
      guest_id: 1,
    },
  ]);

  await knex(tableNames.dishType).del();
  await knex.table(tableNames.dishType).insert([
    {
      description: "Desayuno",
      description_en: "Breakfast",
      description_po: "Café da manhã",
    },
    {
      description: "Almuerzo",
      description_en: "Lunch",
      description_po: "Almoço",
    },
    {
      description: "Cena",
      description_en: "Dinner",
      description_po: "Jantar",
    },
  ]);

  await knex(tableNames.dish).del();
  await knex.table(tableNames.dish).insert([
    {
      name: "plato 1",
      state: "available",
      photoUrl: "http://www.depor.pe",
      price: 89.9,
      description: "description description description description",
      small_description: "description",
      active: true,
      restaurant_id: 1,
      dish_type_id: 2,
    },
    {
      name: "plato 2",
      state: "available",
      photoUrl: "http://www.depor.pe",
      price: 289.9,
      description: "description description description description",
      small_description: "description",
      active: true,
      restaurant_id: 2,
      dish_type_id: 2,
    },
  ]);

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

  await knex(tableNames.touristicPlacesType).del();
  await knex.table(tableNames.touristicPlacesType).insert([
    {
      name: "Museos",
      name_en: "Museums",
      name_po: "Museus",
    },
    {
      name: "Ruinas",
      name_en: "Ruins",
      name_po: "Ruínas",
    },
    {
      name: "Palacios",
      name_en: "Palaces",
      name_po: "Palácios",
    },
  ]);

  await knex(tableNames.touristicPlaces).del();
  await knex.table(tableNames.touristicPlaces).insert([
    {
      name: "Altamira",
      description:
        "Pinturas rupestres... Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres... ",
      img_url: "http://depor.pe",
      address: "Espania, Altamira",
      reference_address: "al costado de portugal",
      touristic_places_type_id: 1,
    },
    {
      name: "Altamira 2",
      description:
        "Pinturas rupestres... Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres... ",
      img_url: "http://depor2.pe",
      address: "Portu, Altamira",
      reference_address: "al costado de portugal",
      touristic_places_type_id: 2,
    },
    {
      name: "Altamira 3",
      description:
        "Pinturas rupestres... Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres...  Pinturas rupestres... ",
      img_url: "http://depor3.pe",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
      touristic_places_type_id: 3,
    },
  ]);
};
