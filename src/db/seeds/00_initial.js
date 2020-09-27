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
      description: `Sus más de 40 años en la profesión han convertido a este cocinero en uno de los mejores del mundo. Para los usuarios de TripAdvisor, el primero a nivel nacional y el segundo a nivel internacional, solamente por detrás del Au Crocodile francés. Uno de sus comensales opina: "atención exquisita y comida sublime, un sueño hecho realidad”.`,
      imgUrl: "https://i.ytimg.com/vi/IF0VmMv2aFw/maxresdefault.jpg",
    },
    {
      name: "La Locanda",
      description: `La Locanda destaca, más allá de por su alta calidad y servicio, por su compromiso con la sostenibilidad. Es, según The World's 50 Best, el restaurante más sotenible del mundo. Aunque eso es lo de menos. 3 Estrellas Michelin, quinto puesto en el Top 100 European Restaurants y, para TripAdvisor, el 19º a nivel mundial y tercero a nivel nacional.  "Ir al Azurmendi es como ir a un espectáculo. Desde que llegas y te reciben con una sorpresa", considera una clienta.`,
      imgUrl:
        "https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/595b389b-d710-40c9-9ec0-040052296bdb.jpg",
    },
    {
      name: "Gerona Roca",
      description: `Los hermanos Roca componen uno de los ejemplos familiares más respetados del mundo de la gastronomía. Cada uno en su respectiva disciplina, comida, postre y bebida, conjugan un menú que se corona como el tercer mejor restaurante a nivel mundial entre los usuarios de la web de viajes, y segundo a nivel nacional. Maravillosa experiencia que todo el mundo debería vivir, porque es un placer para los sentidos”, opina un cliente.`,
      imgUrl:
        "https://s1.eestatic.com/2018/12/05/reportajes/Reportajes_358475651_108705319_1706x960.jpg",
    },
  ]);
  await knex(tableNames.spa).del();
  await knex.table(tableNames.spa).insert([
    {
      name: "Hela Spa",
      description:
        "Además de ser un templo de relajación, su vista es impresionante. Un espacio que vale la pena disfrutar en todos los aspectos. Ofrecen diferentes masajes con técnicas nórdicas, faciales oxigenantes y de limpieza profunda, además de tratamientos corporales completos. Si planeas algo especial con tus amigas, pregunta por sus sparties.",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Reyi Spa",
      description:
        "La exclusividad que distingue a Reyi también está impresa en este mágico rincón con magníficas vistas desde el piso 15. Despeja tu día para disfrutar de todas sus amenidades y de tu servicio(s) favoritos. Todos sus tratamientos son totalmente personalizados para atender las necesidades especificas de cada persona.",
      imgUrl: "https://via.placeholder.com/150",
    },
  ]);
  await knex(tableNames.gym).del();
  await knex.table(tableNames.gym).insert([
    {
      name: "Megaforce",
      description:
        "Gimnasios Mega Force crea un estilo de vida saludable en las familias peruanas mediante el deporte y la sana diversión",
      imgUrl: "https://i.ytimg.com/vi/UrCY7HvCBNI/hqdefault.jpg",
    },
    {
      name: "Fullbody",
      description: `La rutina FullBody de 3 días es aquella en la que se trabaja todos los grupos musculares en una única sesión.Destaca por su gran versatilidad, ya que permite ganar con diferencia a otras rutinas de entrenamiento más masa muscular y fuerza en principiantes. Sin embargo también es muy eficaz para personas que ya tienen cierta experiencia en el gimnasio pero que carecen de tiempo.`,
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faltafitgymclub.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fremo-portada.jpg&f=1&nofb=1",
    },
  ]);
  await knex(tableNames.local).del();
  await knex.table(tableNames.local).insert([
    {
      name: "Sol de oro",
      description:
        "Sol de Oro trae un nuevo sabor a Lake Placid, brindando un excelente menú basado en la cocina latinoamericana. Encontrarás 6 tipos diferentes de filetes y una variedad de acompañamientos entre los que puedes elegir.",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fc0056906.cdn2.cloudfiles.rackspacecloud.com%2F57988.jpg&f=1&nofb=1",
    },
    {
      name: "Mi Rincon",
      description:
        "Nuestra boda en Mi Rincon Banquet Hall fue más increíble de lo que esperábamos, fue un sueño hecho realidad. Me acabo de mudar de Los Ángeles y estaba muy nerviosa por planificar nuestra boda en Las Vegas en menos de dos meses.",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmariamulatalectora.files.wordpress.com%2F2012%2F03%2Fmi-rincon3.jpg&f=1&nofb=1",
    },
  ]);
  await knex(tableNames.event).del();
  await knex.table(tableNames.event).insert([
    {
      name: "Quinta Real",
      description:
        "Simplemente en el mejor lugar de la zona musical del hotel, cerca de los principales centros comerciales y de convenciones. Además, estratégicamente rodeado de las más importantes oficinas corporativas, a tan solo 25 minutos del Aeropuerto Internacional y muy cerca del centro de la ciudad.",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F14%2F87%2F42%2F27%2Fmeeting-room.jpg&f=1&nofb=1",
      type: "musica",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Desfiles resort",
      description:
        "Los desfiles de moda se dividen en tres tipos según el tipo de prenda y la temporada; los desfiles prêt-à-porter o listo para usarse muestran ropa demandada por la masa; los desfiles de alta costura basados en creaciones artísticas que buscan la experimentación y los desfiles resort o de temporada que muestran prendas de colecciones primavera-verano, otoño-invierno y crucero.",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dsigno.es%2Fblog%2Fwp-content%2Fuploads%2F2018%2F08%2FORGANIZACION-EVENTOS-MODA.jpg&f=1&nofb=1",
      type: "moda",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Romeria de los santos",
      description:
        "El pueblo de Insierto, en el mierense Valle de Cuna, acoge la Romería de los Santos Mártires de Valdecuna , en la que los romeros suben a la ermita de los Mártires San Cosme y San Damián, donde después de la misa hay la subasta del ramu, seguida de una comida campestre. Esta fiesta ha sido declarada ",
      imgUrl:
        "https://fiestasdeasturias.com/wp-content/uploads/2017/05/Romería-de-los-Santos-Mártires-de-Valdecuna.jpg",
      type: "arte",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Talleres de Juan",
      description:
        "Mis últimos 7 años estoy como chef y responsable de Valencia Montessori School, primera escuela 100% Montessori en Valencia y primera de España con un Chef KM0 con el sello SLOW FOOD y una alimentación libre de procesados, refinados, azúcares y totalmente natural y de temporada.",
      imgUrl:
        "https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160.jpg 3200w, https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160-300x200.jpg 300w, https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160-768x512.jpg 768w, https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160-1024x683.jpg 1024w, https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160-900x600.jpg 900w, https://juanllorca.com/wp-content/uploads/2020/03/th20200307_173504_160-600x400.jpg",
      type: "charlas",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Mallorquil",
      description: `Otro de los clásicos de Shakespeare que nos llega en una versión actualizada, divertida y con música en directo. Sueño de una noche de verano es un canto a la comedia, una fantasía sobre los enredos amorosos. Un lugar mágico, donde lo sobrenatural, lo natural, los sueños y el teatro toman forma para confundirse todo.
      La trama es bien conocida: el Duque y la futura Duquesa están a punto de casarse y se prepara una gran fiesta. Los criados preparan un gran regalo, una obra de teatro. El Rey y la Reina de las Hadas acercan para asistir a las celebraciones y cuatro jóvenes amantes en plena excitación amorosa quieren poner orden en sus relaciones. El lío está servido.`,
      imgUrl:
        "https://estaticos-cdn.prensaiberica.es/clip/7734f847-4074-47d4-a8a9-f131725f61a8_16-9-aspect-ratio_75p_0.jpg",
      type: "teatro",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Big fest",
      description:
        "El calendario oficial de las Semanas de la Moda de Nueva York, París, Milán, Londres o Madrid, exposiciones en honor a grandes genios de la aguja como Coco Chanel o David Delfín, las galas más destacadas y el mejor 'street style'. Toma nota de toda la moda que está por venir.",
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1133769350.jpg?crop=1.00xw:0.752xh;0,0.248xh&resize=768:*",
      type: "moda",
      start_time: "2020-09-14T01:27:18.926Z",
      end_time: "2020-09-17T01:27:18.926Z",
    },
    {
      name: "Paty Suero",
      description:
        "PATY SUERO SMITH es autora de Just Kids, que ganó el Premio Nacional del Libro en 2010, y de M Train, así como de numerosas colecciones de poesía y ensayos. Su álbum seminal Horses ha sido aclamado como uno de los 100 mejores álbumes de todos los tiempos.",
      imgUrl:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F109508213%2F5552659427%2F1%2Foriginal.20200825-191214?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e39b52cda6043caa05c87d4de17e1f01",
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
      img_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTu4DE_8_ZBg%2Fmaxresdefault.jpg&f=1&nofb=1",
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
    {
      name: "Amareto",
      description: null,
      price: 39.65,
      soles: 39.655,
      euro: 39.65,
      dollar: 39.65,
      quantity: 20,
      img_url:
        "https://licoresmonteblanco.com/wp-content/uploads/2020/04/amareto-416x416.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Vodka",
      description: null,
      price: 57.5,
      soles: 57.5,
      euro: 57.5,
      dollar: 57.5,
      quantity: 20,
      img_url:
        "https://licoresmonteblanco.com/wp-content/uploads/2020/04/ABSOLUT-750-416x416.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Gin Bombay Sapphire",
      description: null,
      price: 90.5,
      soles: 90.5,
      euro: 90.5,
      dollar: 90.5,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/b/o/bombay_001.jpg",
      has_stock: true,
      active: true,
      product_category_id: 3,
    },
    {
      name: "Gin Bulldog Litro",
      description: null,
      price: 115.0,
      soles: 115.0,
      euro: 115.0,
      dollar: 115.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/b/u/bulldog-gin-litrro.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Ginebra Fisher",
      description: null,
      price: 120.0,
      soles: 120.0,
      euro: 120.0,
      dollar: 120.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/g/i/gin_fisher_3.png",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Tequila Silver",
      description: null,
      price: 88.5,
      soles: 88.5,
      euro: 88.5,
      dollar: 88.5,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/t/e/tequila_patron_silver_1_3.png",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Mezcal",
      description: null,
      price: 195.0,
      soles: 195.0,
      euro: 195.0,
      dollar: 195.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/p/e/peloton_de_la_muerte_001_1.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Cognac Hennessy XO",
      description: null,
      price: 225.0,
      soles: 225.0,
      euro: 225.0,
      dollar: 225.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/h/e/hennesy_xo_001_1.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Cocuy Corobore",
      description: null,
      price: 75.0,
      soles: 75.0,
      euro: 75.0,
      dollar: 75.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/c/o/cocuy_corobore_3.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Jagermeister",
      description: null,
      price: 90.0,
      soles: 90.0,
      euro: 90.0,
      dollar: 90.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/d/u/dulce_jagermeister_1_3.png",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Limoncello Massa",
      description: null,
      price: 87.5,
      soles: 87.5,
      euro: 87.5,
      dollar: 87.5,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/v/i/villa-la-massa-limoncello01.jpg",
      has_stock: true,
      active: true,
      product_category_id: 2,
    },
    {
      name: "Beirao",
      description: null,
      price: 115.0,
      soles: 115.0,
      euro: 115.0,
      dollar: 115.0,
      quantity: 20,
      img_url:
        "https://www.licoresmundiales.com/pub/media/catalog/product/cache/6d1a366ec4c28c9c58646a10a644e322/d/u/dulce_beirao_1_3.jpg",
      has_stock: true,
      active: true,
      product_category_id: 1,
    },
  ]);

  await knex(tableNames.account).del();
  await knex.table(tableNames.account).insert([
    {
      currency_symbol: "$",
      total_amount: 0,
      billing_date_start: "2020-09-14T01:23:45.431Z",
      billing_date_end: "2020-09-22T01:23:45.431Z",
      guest_id: 1,
    },
  ]);

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
  ]);

  await knex(tableNames.administrator).del();
  await knex.table(tableNames.administrator).insert([
    {
      email: "admin@hotel.com",
      password: "admin@123",
    },
  ]);

  await knex(tableNames.hsiaPackage).del();
  await knex.table(tableNames.hsiaPackage).insert([
    {
      name: "Personal",
      description: `Disfruta de un internet a tu medida. Este plan es un plan personal en donde prodras disfurtar de tus series favoritas y navegar con tranquilidad`,
      internet_speed: 5,
      unit_measure: "Mbps",
      total_amount: "15",
    },
    {
      name: "Premium",
      description:
        "Este plan es ideal para la familia, donde podras ver tus serias favoritas sin corte alguno y nevegar sin ningun incoveniente",
      internet_speed: 50,
      unit_measure: "Mbps",
      total_amount: "70",
    },
    {
      name: "Coorporativo",
      description:
        "Este plan es ideal para el trabajo. Si tienes programado algun meeting o reunion no dudes que este plan no te fallara",
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
      name: "Adobo de chancho",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTnf8WQKQtuU%2Fmaxresdefault.jpg&f=1&nofb=1",
      price: 79.9,
      description:
        "El adobo es un estilo de preparación proveniente de Europa; pero en Perú se realiza con un estilo único, en donde la carne de chancho se macera en chicha de jora y se acompaña con camote, tubérculo oriundo del Perú.",
      small_description:
        "El adobo es un estilo de preparación proveniente de Europa; pero en Perú se realiza con un estilo único, en donde la carne de chancho se macera en chicha de jora y se acompaña con camote, tubérculo oriundo del Perú.",
      active: true,
      restaurant_id: 1,
      dish_type_id: 2,
    },
    {
      name: "Aguadito",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fperudelights.com%2Fwp-content%2Fuploads%2F2012%2F09%2FChicken-Aguadito.-jpg-1.jpg&f=1&nofb=1",
      price: 50,
      description:
        "Otro platillo de larga data, una sopa espesa contradictoriamente a su nombre, preparada a base de menudencia de pollo o gallina, aderezada con culantro. Esta emblemática sopa es un clásico “levanta muertos”, muy buena para empezar el día. También existen otras versiones de esta platillo hechos a base de pescado como el aguadito de pescado",
      small_description:
        "Otro platillo de larga data, una sopa espesa contradictoriamente a su nombre, preparada a base de menudencia de pollo o gallina, aderezada con culantro. Esta emblemática sopa es un clásico “levanta muertos”, muy buena para empezar el día. También existen otras versiones de esta platillo hechos a base de pescado como el aguadito de pescado",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Ajiaco de papas",
      state: "available",
      photoUrl: "https://libroderecetas.com/files/recetas/ajiaco-de-papas.jpg",
      price: 31,
      description:
        "El ajiaco es un plato sudamericano, se prepara en Chile, Colombia, Argentina y obviamente en Perú, en donde la papa es una de los ingredientes más utilizados. La versión peruana del ajiaco de papas, no resalta por las papas, sino por el queso fresco que lleve entre sus principales ingredientes.",
      small_description:
        "El ajiaco es un plato sudamericano, se prepara en Chile, Colombia, Argentina y obviamente en Perú, en donde la papa es una de los ingredientes más utilizados. La versión peruana del ajiaco de papas, no resalta por las papas, sino por el queso fresco que lleve entre sus principales ingredientes.",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Ají de gallina",
      state: "available",
      photoUrl: "https://libroderecetas.com/files/recetas/aji-de-gallina.jpg",
      price: 42,
      description:
        "Este es uno de los platos “reyes” de la gastronomía peruana, su complejidad y matiz de sabores lo hacen un platillo que podría catalogarse como gourmet. Gallina o pollo es el ingrediente principal, pero en su preparación está el éxito de este exquisito plato peruano.",
      small_description:
        "Este es uno de los platos “reyes” de la gastronomía peruana, su complejidad y matiz de sabores lo hacen un platillo que podría catalogarse como gourmet. Gallina o pollo es el ingrediente principal, pero en su preparación está el éxito de este exquisito plato peruano.",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Alverjado de pollo",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frestaurantesdelima.com%2Fwp-content%2Fuploads%2F2015%2F08%2FALVERJADO-Una-Receta-de-Un-plato-T%25C3%25ADpico-del-Per%25C3%25BA.png&f=1&nofb=1",
      price: 37,
      description:
        "Esta receta la compartimos con Chile, aunque el concepto sea el mismo, la receta peruana tiene el sello de la sazón nacional. El pollo es el protagonista del plato, pero el “alverjado” al estilo tacneño lo hacen único.",
      small_description:
        "Esta receta la compartimos con Chile, aunque el concepto sea el mismo, la receta peruana tiene el sello de la sazón nacional. El pollo es el protagonista del plato, pero el “alverjado” al estilo tacneño lo hacen único.",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Anticuchos",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tourradar.com%2Fdays-to-come%2Fwp-content%2Fuploads%2F2016%2F12%2FAnticuchos.jpg&f=1&nofb=1",
      price: 39,
      description:
        "Anti significa sumergir y cucho ají, el concepto del nombre es lo que encierra el alma de este platillo. Pincho de corazón de res, macerado en ají panca y especies; cocinado en una parrilla acompañado de papas y crema de ají o rocoto. Uno de los platillos más tradicionales y no sólo por su gran sabor, sino por el concepto de su venta en la Lima tradicional.",
      small_description:
        "Anti significa sumergir y cucho ají, el concepto del nombre es lo que encierra el alma de este platillo. Pincho de corazón de res, macerado en ají panca y especies; cocinado en una parrilla acompañado de papas y crema de ají o rocoto. Uno de los platillos más tradicionales y no sólo por su gran sabor, sino por el concepto de su venta en la Lima tradicional.",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Arroz a la jardinera",
      state: "available",
      photoUrl:
        "https://libroderecetas.com/files/recetas/arroz-a-la-jardinera.jpg",
      price: 49,
      small_description:
        "El arroz es una de las guarniciones más usadas en la gastronomía peruana, es por eso que un arroz con verduras (de ahí el nombre jardinera) con un suave aderezo se convierte en una de las mejores opciones entre los arroces peruanos.",
      active: true,
      restaurant_id: "3",
      dish_type_id: "2",
    },
    {
      name: "Arroz chaufa",
      state: "available",
      photoUrl: "https://libroderecetas.com/files/recetas/arroz-chaufa.jpg",
      price: 30,
      small_description:
        "El plato más emblemático del chifa, una fusión de la gastronomía chino-peruana. Un arroz salteado con diversas carnes. Entre los más populares resalta el arroz chaufa de pollo y el arroz chaufa especial (mixto), con variedades como el arroz chaufa de verduras.",
      active: true,
      restaurant_id: "3",
      dish_type_id: "2",
    },
    {
      name: "Arroz chaufa de mariscos",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.limacriolla.com%2Fwp-content%2Fuploads%2F2015%2F10%2F00-Menu-Photos18.jpg&f=1&nofb=1",
      price: 39,
      description:
        "Este platillo si bien es cierto tiene como base el arroz chaufa del chifa, es un plato marino, que tiene más sazón criolla que china o chino-peruana. Arroz salteado con sabrosos frutos del mar (langostinos, caracoles, conchas, camarones, calamares, pulpos etc.).",
      small_description:
        "Este platillo si bien es cierto tiene como base el arroz chaufa del chifa, es un plato marino, que tiene más sazón criolla que china o chino-peruana. Arroz salteado con sabrosos frutos del mar (langostinos, caracoles, conchas, camarones, calamares, pulpos etc.).",
      active: true,
      restaurant_id: "2",
      dish_type_id: "2",
    },
    {
      name: "Arroz con mariscos",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.limacriolla.com%2Fwp-content%2Fuploads%2F2015%2F10%2F00-Menu-Photos18.jpg&f=1&nofb=1",
      price: 37,
      description:
        "Para muchos es la “paella peruana”. Un plato que tiene en la variedad de sus ingredientes su mayor virtud. Un arroz acompañado con diversos mariscos y con aderezo marino y criollo.",
      small_description:
        "Para muchos es la “paella peruana”. Un plato que tiene en la variedad de sus ingredientes su mayor virtud. Un arroz acompañado con diversos mariscos y con aderezo marino y criollo.",
      active: true,
      restaurant_id: "1",
      dish_type_id: "2",
    },
    {
      name: "Arroz con pato",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4kmy5EOQqqM%2Fmaxresdefault.jpg&f=1&nofb=1",
      price: 33,
      description:
        "Uno de los platos más emblemáticos de la gastronomía lambayecana, con la inconfundible sazón chiclayana. Un suculento platillo a base de pato macerado en chicha de jora y demás especies, acompañado de un arroz cocinado con culantro.",
      small_description:
        "Uno de los platos más emblemáticos de la gastronomía lambayecana, con la inconfundible sazón chiclayana. Un suculento platillo a base de pato macerado en chicha de jora y demás especies, acompañado de un arroz cocinado con culantro.",
      active: true,
      restaurant_id: "1",
      dish_type_id: "2",
    },
    {
      name: "Arroz con pollo",
      state: "available",
      photoUrl: "https://libroderecetas.com/files/recetas/arroz-con-pollo.jpg",
      price: 49,
      description:
        "Este plato es otro de los más emblemáticos de la cocina peruana, de origen limeño y muy similar al arroz con pato chiclayano. Un pollo dorado acompañado de arroz preparado con especias y culantro, sin olvidar una buena salsa criolla de acompañante.",
      small_description:
        "Este plato es otro de los más emblemáticos de la cocina peruana, de origen limeño y muy similar al arroz con pato chiclayano. Un pollo dorado acompañado de arroz preparado con especias y culantro, sin olvidar una buena salsa criolla de acompañante.",
      active: true,
      restaurant_id: "1",
      dish_type_id: "2",
    },
    {
      name: "Ejecutivo",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmesarosa.mx%2Fwp-content%2Fuploads%2F2015%2F04%2FIMG_4554.jpg&f=1&nofb=1",
      price: 39,
      description:
        "El desayuno es la primera comida que se consume en el día. El nombre deriva del hecho de que uno no come mientras duerme, por lo que al levantarse por la mañana se encuentra en ayunas, rompiéndose ese ayuno al tomar esta comida.",
      small_description:
        "El desayuno es la primera comida que se consume en el día. El nombre deriva del hecho de que uno no come mientras duerme, por lo que al levantarse por la mañana se encuentra en ayunas, rompiéndose ese ayuno al tomar esta comida.",
      active: true,
      restaurant_id: "2",
      dish_type_id: "1",
    },
    {
      name: "Continental",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F02%2F2c%2F40%2Fd3%2Fdesayuno-continental.jpg&f=1&nofb=1",
      price: 34,
      description:
        "Para rematar, pon unas frambuesas enteras con taquitos de papaya. ¡Fàcil y saludable!",
      small_description:
        "Para rematar, pon unas frambuesas enteras con taquitos de papaya. ¡Fàcil y saludable!",
      active: true,
      restaurant_id: "2",
      dish_type_id: "1",
    },
    {
      name: "Sandwich de salmón",
      state: "available",
      photoUrl:
        "https://www.clara.es/medio/2018/02/06/desayunos-saludables19_ee94ed3b_600x900.jpg",
      price: 61,
      description:
        "Si optas por un desayuno salado, prueba este. En un par de rebanadas de pan integral, unta queso crema.",
      small_description:
        "Si optas por un desayuno salado, prueba este. En un par de rebanadas de pan integral, unta queso crema.",
      active: true,
      restaurant_id: "3",
      dish_type_id: "1",
    },
    {
      name: "Avena con yogur de soja",
      state: "available",
      photoUrl:
        "https://www.clara.es/medio/2019/01/29/desayunos-avena-yogur-papaya-frambuesas_ef4ff8b8_1000x1500.jpg",
      price: 71,
      description:
        "Aquí tienes unos de los deliciosos desayunos con avena fáciles de preparar. En un tarro de cristal, pon una capa de copos de avena machacados con unas avellanas y unas pipas de girasol. Encima, añade una capa de frambuesas batidas con un poco de miel. Luego, una capa de yogur de soja 0%.",
      small_description:
        "Aquí tienes unos de los deliciosos desayunos con avena fáciles de preparar. En un tarro de cristal, pon una capa de copos de avena machacados con unas avellanas y unas pipas de girasol. Encima, añade una capa de frambuesas batidas con un poco de miel. Luego, una capa de yogur de soja 0%.",
      active: true,
      restaurant_id: "1",
      dish_type_id: "1",
    },
    {
      name: "Nawara",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fo6SnfobTelw%2Fmaxresdefault.jpg&f=1&nofb=1",
      price: 43,
      description:
        "Solo tienes que coger unos tacos de carne de pavo, pollo o cerdo, insertarlos en palos de brocheta junto con verduras intercaladas, y asarlos a la parrilla. En este caso la carne es de pavo y le hemos puesto pimiento verde, y berenjena y cebolla moradas.",
      small_description:
        "Solo tienes que coger unos tacos de carne de pavo, pollo o cerdo, insertarlos en palos de brocheta junto con verduras intercaladas, y asarlos a la parrilla. En este caso la carne es de pavo y le hemos puesto pimiento verde, y berenjena y cebolla moradas.",
      active: true,
      restaurant_id: "1",
      dish_type_id: "3",
    },
    {
      name: "Especial",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdA_drTjUdfI%2Fmaxresdefault.jpg&f=1&nofb=1",
      price: 68,
      description:
        "Para ir súper rápido, lo único que tienes que hacer es cocinar las verduras lavadas y cortadas con un estuche de silicona o un recipiente apto para el microondas. ",
      small_description:
        "Para ir súper rápido, lo único que tienes que hacer es cocinar las verduras lavadas y cortadas con un estuche de silicona o un recipiente apto para el microondas. ",
      active: true,
      restaurant_id: "1",
      dish_type_id: "3",
    },
    {
      name: "Simple",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmilrecetas.net%2Fwp-content%2Fuploads%2F2015%2F07%2FRecetas-de-cena-1.jpg&f=1&nofb=1",
      price: 39,
      description:
        "Coge unas verduras (calabacines, zanahoria, cebolla...). Límpialas, córtalas en rodajas y rehógalas un poco en una sartén.",
      small_description:
        "Coge unas verduras (calabacines, zanahoria, cebolla...). Límpialas, córtalas en rodajas y rehógalas un poco en una sartén.",
      active: true,
      restaurant_id: "3",
      dish_type_id: "3",
    },
    {
      name: "Cena Peruana",
      state: "available",
      photoUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-OKMpDBN8xEo%2FVT4ITbKNkjI%2FAAAAAAAAAtM%2FK4n1CFI1s0U%2Fs1600%2F088.JPG&f=1&nofb=1",
      price: 72,
      description:
        "Por un lado, lava unos ramitos de brócoli, colócalos en un recipiente para la cocción al vapor y cocínalos durante unos 5 minutos. ",
      small_description:
        "Por un lado, lava unos ramitos de brócoli, colócalos en un recipiente para la cocción al vapor y cocínalos durante unos 5 minutos. ",
      active: true,
      restaurant_id: "2",
      dish_type_id: "3",
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
      name: "Libros Incas",
      description:
        "Los museos y las colecciones de arte conservan una gran parte de sus objetos fuera del alcance del público, bien en sótanos o en almacenes. El sistema LISTA ofrece múltiples soluciones para satisfacer con las exigencias que conlleva conservar de forma seguro y limpia este tipo de mercancía: desde estanterías universales, pasando por armarios de cajones, hasta sistemas de estanterías de base móvil y de estanterías corredizas.",
      img_url:
        "https://www.lista.com/assets/components/phpthumbof/cache/lista-branchen-611x346-museen-6.3c96d0320023f10221c5a62b208f888a.jpg",
      touristic_places_type_id: "1",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Museo Picaso",
      description:
        "El Museo Picasso de Barcelona fue el primero del mundo en exhibir la obra de Picasso. De hecho, se abrió en 1963, cuando el artista aún estaba vivo. Tiene la distinción de albergar la mayor cantidad de piezas del artista: más de 3.500 en total. Se encuentra en el corazón del barrio del Born.",
      img_url:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.viajejet.com%2Fwp-content%2Fviajes%2Fm-de-londres.jpg&f=1&nofb=1",
      touristic_places_type_id: "1",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Fundación Juan",
      description:
        "Con la excepción del Museo Picasso, es el único en Barcelona dedicado a un solo artista. La Fundación abrió en 1975 con la aprobación del propio Miró, quien quiso asegurarse un sitio apropiado para exhibir sus mejores obras. Es una de las atracciones de Montjuic.",
      img_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.elcomercio.pe%2Ffiles%2Fec_article_multimedia_gallery%2Fuploads%2F2017%2F03%2F30%2F58dc9243cc3bc.jpeg&f=1&nofb=1",
      touristic_places_type_id: "1",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Cosmo",
      description:
        "CosmoCaixa es una ruina dedicado a los más pequeños. Con una temática científica, su misión es acercar el mundo de la ciencia a los niños de una manera divertida. Se encuentra muy cerca de la montaña del Tibidabo.",
      img_url:
        "https://www.oyster.com/wp-content/uploads/sites/35/2019/06/27651-tulum-ruins-mexico.jpg",
      touristic_places_type_id: "2",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Gaudi",
      description:
        "Gaudí Experiencia es la primera ruina dedicada enteramente a la figura del genio catalán. Aquí encontrarás un cine 4D, exposiciones y pantallas digitales interactivas, entre otras atracciones.",
      img_url:
        "https://www.oyster.com/wp-content/uploads/sites/35/2019/06/27650-teotihuacan-mexican-ruins.jpg",
      touristic_places_type_id: "2",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Chichen",
      description:
        "Chichén Itzá podría ser el conjunto de ruinas más famosas de México. Ubicada en la península de Yucatán , esta antigua ciudad es el resultado de una población grande y diversa, que se refleja en los diversos estilos y técnicas arquitectónicas que se encuentran en todo el sitio. Es considerado como uno de los mejores ejemplos de civilización maya-tolteca en el área.",
      img_url:
        "https://www.oyster.com/wp-content/uploads/sites/35/2019/06/27692-chicen-itza-mexico.jpg",
      touristic_places_type_id: "2",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Viconte",
      description:
        "El Palacio de Vaux-le-Vicomte es un palacio de estilo barroco del siglo XVII. Está ubicado junto a la ciudad francesa de Maincy. Fue construido entre 1658 y 1661 para el intendente de finanzas de Luis XIV, Nicolás Fouquet que contrató a los mejores artistas de la época para construir el palacio. Esta construcción se convirtió en uno de los palacios más bellos del mundo, lo que provocó el enfado de Luis XIV y la caída de Nicolás Fouquet. Todo el equipo que había participado en su edificación fue contratado para la construcción del Palacio de Versalles.",
      img_url:
        "https://losviajesdedomi.com/wp-content/uploads/2014/09/palacio-vaux-palacios-mas-bellos-del-mundo-2.jpg",
      touristic_places_type_id: "3",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Cita",
      description:
        "Construido en el siglo XVII y ubicado al sur de la ciudad del Salzburgo (Austria). Servía al príncipe arzobispo Markus Sittikus de Hohenems (1612-1619) como lugar de representaciones y festividades. Su jardín de estilo barroco, en el que el agua tiene un papel protagonista, es uno de los más bellos y suntuosos de Europa. Los juegos de Agua, se encargaban de mojar a los huéspedes de las fiestas ofrecidas por el príncipe, hoy en día estos juegos de agua son el principal reclamo de este bello palacio",
      img_url:
        "https://losviajesdedomi.com/wp-content/uploads/2014/09/hellbrunn-palacios-mas-bonitos-del-mundo-1-600x402.jpeg",
      touristic_places_type_id: "3",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
    {
      name: "Viena",
      description:
        "Situado en Viena (Austria), el Palacio Hofburg es uno de los palacios más bellos del mundo. Ha sido durante más de 600 años el lugar de residencia de invierno de los Habsburgo. .El palacio cuenta con 2.600 estancias, repartidas en 18 alas. Actualmente alberga  la residencia del presidente de la República austriaca, así como el museo de la famosísima emperatriz Sissi y los salones imperiales.",
      img_url:
        "https://losviajesdedomi.com/wp-content/uploads/2014/09/palacio-de-hofburg-palacios-mas-bonitos-del-mundo-1-600x395.jpeg",
      touristic_places_type_id: "3",
      address: "Portu, Altamira 3",
      reference_address: "al costado de portugal 3",
    },
  ]);
};
