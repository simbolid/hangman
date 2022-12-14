const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");


var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(cors());

let leaderboard = []; 

app.get("/leaderBoard", (req, res) => { 
  res.json(leaderboard); 
})

app.post("/addLeaderBoard", (req, res) => { 
  console.log(req.body); 
  /*data = { 
    room: req.body.room,
    author: req.body.author, 
    score: req.body.score, 
  }

  leaderboard.push(data); */
  
})


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    console.log(data)
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on('won_game', (data) => {
    // console.log(data)
    socket.to(data.room).emit("other_player_won", data);
  });

});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});