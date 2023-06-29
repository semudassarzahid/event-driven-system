// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('request', (request) => {
    const { token, module, feature, data } = request;
    // Process the request and prepare the response
    const response = {
      token,
      message: 'Response from the server',
      data: { key: 'value' },
    };

    // Broadcast the response to the client with the specified token
    socket.emit(token, response);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
