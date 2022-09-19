const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');

app.use(cors()); // Add cors middleware
const { Server } = require('socket.io'); // Add this

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });
  
  // Add this
  // Listen for when the client connects via socket.io-client
  io.on('connection', (socket) => {git
    console.log(`User connected ${socket.id}`);
  
    // We can write our socket event listeners in here...
  });
// Add this
app.get('/', (req, res) => {
  res.send('Hello world');
});

server.listen(5000, () => 'Server is running on port 5000');




// var express = require('express');
// var cors=require('cors')
// var app = express();
// var abc=require('./abc');
// var chat=require('./chat')
// var client=require('./connection')
// const http = require('http');
// app.use((cors()))
// app.use(express.urlencoded({extended: false }))
// app.use(express.json())
// client.connect();

// app.use('/abc',abc);
// app.use('/chat',chat)
// const server = http.createServer(app);

// app.get('/', async function(req, res){
//     const data=await client.query("select * from  class");
//     res.send(data.rows);
// });
// app.get('/helo', function(req, res){
//    res.send({a:1,b:2,c:3});
// });

// app.post('/post',(req,res)=>{
//     console.log("req is",req.body)
//     res.send({a:1,b:2,c:3});
// })
// app.post('/form',async(req,res)=>{
//    console.log("Req is",req.body)
//    await client.query("create table if not exist")
// })
// // app.listen(5000);

// server.listen(5000, () => 'Server is running on port 5000');
