var express = require('express');
var router = express.Router();
const { Server } = require("socket.io");
const io = new Server(5001);
io.on("connection", (socket) => {
    console.log(socket.id,"client connected"); // x8WIv7-mJelg7on_ALbx
  });
  
router.get('/', function(req, res){
   res.send('GET heehhehehehehhe chat');
});
module.exports= router;