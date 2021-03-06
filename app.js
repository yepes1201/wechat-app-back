require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://wechat-app-danielyepes.netlify.app",
    ],
  },
});

io.on("connection", (socket) => {
  socket.on("conectado", (data) => {
    console.log(data);
  });

  socket.on("add", (data) => {
    io.emit("add", data);
  });

  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
