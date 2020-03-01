const express = require('express');
const uuidv4 = require('uuid/v4');
const omit = require('lodash/omit');
const keys = require('lodash/keys');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../public/build/')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.set('port', port);
server.listen(port);

io.on('connection', (socket) => {
    socket.on('create', (name) => {
        // Create the room and add user to the room
        const id = uuidv4();
        socket.name = name;
        socket.roomId = id;
        socket.join(id);
        socket.emit('created', id);
    });

    socket.on('join', ({ id, name}) => {
        // Add the user to the room
        socket.name = name;
        socket.roomId = id;
        socket.join(id);
    });

    socket.on('vote', (score) => {
        // On vote, emit vote to other users
        io.to(socket.roomId).emit('voted', { id: socket.id, score });
    });

    socket.on('hide', (id) => {

    });

    socket.on('leave', ({ id, name }) => {
        // Remove the user from the room
        omit(rooms[id], [name]);
        // Remove the room if no ones inside
        if (keys(rooms[id]).length === 0) {
            omit(rooms, [id]);
        }
    });
});
