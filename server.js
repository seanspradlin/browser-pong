const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.resolve(__dirname + '/build')));

io.on('connection', socket => {
  console.log('a user has connected');
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});
