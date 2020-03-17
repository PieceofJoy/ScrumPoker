const express = require('express');
const uuidv4 = require('uuid/v4');
const lodash = require('lodash');
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
        socket.roomId = id;
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
        lodash.set(rooms, [`${socket.roomId}`, `${socket.id}`, 'score'], score);
        // On vote, emit vote to other users
        io.to(socket.roomId).emit('update', rooms[socket.roomId]);
    });
    
    socket.on('showScore', () => {
        // On show score, emit onShowScore to room
        io.to(socket.roomId).emit('onShowScore');
    });

    socket.on('hideScore', () => {
        // On hide score, emit onHideScore to room
        io.to(socket.roomId).emit('onHideScore');
    });

    socket.on('leave', ({ id, name }) => {
        // Remove the user from the room
        lodash.omit(rooms[id], [name]);
        // Remove the room if no ones inside
        if (lodash.keys(rooms[id]).length === 0) {
            lodash.omit(rooms, [id]);
        }
    });
});
