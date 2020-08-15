// const socketIO = require("socket.io");
const WebSocket = require("ws");
// let roomsArray = [];
// var port = process.env.PORT || 8080

function init(expressServer) {
  const server = new WebSocket.Server({
    server: expressServer,
  });

  function broadcast(data) {
    server.clients.forEach((ws) => {
      ws.send(data);
    });
  }

  server.on("connection", (ws) => {
    console.log("client connected.");
    ws.on("message", (data) => {
      console.log(data);
      broadcast(data);
    });
  });

  setInterval(() => {
    server.clients.forEach((client) => {
      client.send(new Date().toTimeString());
    });
  }, 1000);

  console.log("Server sockets is listening for connections!!");
}

module.exports = {
  init,
};
