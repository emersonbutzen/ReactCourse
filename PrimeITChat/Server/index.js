const http = require("http");
const express = require("express");
const socketio = require("socketio");
const cors = require("cors");

const { addUser, removeUser, getUser, getUserInRoom } = require("./users");

const router = require("router");
const { callbackify } = require("util");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { erro, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, bem vindo a sala ${user.room}.`,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name}, bem vindo a sala ${user.room}.`,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUserInRoom(use.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name}, saiu da sala.`,
      });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUserInRoom(use.room),
      });
    }
  });
});

server.listen(process.env.PORT || 5000);
