require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

// const { connect } = require("./db.js");
// const { userRouter } = require("./controllers");
const { notFound, handleError } = require("./middlewares");
const sockets = require("./sockets");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
// const DB_URL = process.env.DB_URL;

(async function init() {
  try {
    // await connect(DB_URL);
    const app = express();
    app.use(cors());
    const server = http.Server(app);

    app.use(express.json());

    app.use("/", (req, res) => {
      res.status(200).json({
        ok: true,
        message: "Hola mundo ✌🏼",
      });
    });

    sockets.init();
    // app.use("/api/users", userRouter);

    app.use(notFound);
    app.use(handleError);
    server.listen(
      PORT,
      HOST,
      console.log(`Listening on http://${HOST}:${PORT} ...`)
    );
  } catch (err) {
    console.log(err);
  }
})();
