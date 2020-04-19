const socketIO = require("socket.io");

let roomsArray = [];

function init(server) {
  const io = socketIO(server);
  console.log("Server sockets is listening for connections!!");

  io.on("connection", (socket) => {
    console.log("client connected!!");

    socket.on("join-room", (room) => {
      console.log("Client joined on " + room);
      socket.join(room);
      if (!roomsArray.some((element) => element === room)) {
        roomsArray.push(room);
      }
      console.log(roomsArray);
      socket.emit("rooms", roomsArray);
    });

    socket.on("new-message", function (data) {
      console.log(data);
      socket.to(data.room).emit("messages", data);
    });
  });
}

module.exports = {
  init,
};
