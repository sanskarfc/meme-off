// including libraries 
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// when someone joins the room
io.on('connection', socket => {
    // console.log 
    console.log('user connected');  

    // 

    // when someone disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
