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

const rooms = {};

io.on('connection', (socket) => {
    socket.on('create', (name) => {
        const id = uuidv4();
        //  Create new room
        rooms[id] = {};
        const room = rooms[id];
        // Add user to room
        room[socket.id] = {
            name
        };
        // Add socket to room
        socket.join(id);
        // Emit created and update event
        socket.emit('created', id);
        io.to(id).emit('update', rooms[id]);
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
