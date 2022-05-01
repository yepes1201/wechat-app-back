require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("conectado", (data) => {
    console.log(data);
  });

  socket.on("add", (data) => {
    io.emit("add", data);
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
