import io from 'socket.io-client';

export const socket = io.connect('http://localhost:80/');

export const createRoom = name => {
  socket.emit('create', name);
};

export const vote = (score) => {
    socket.emit('vote', score );
};

export const initSocket = (setState, history) => {
  socket.on('created', roomId => {
    history.push(`/room/${roomId}`);
  });

  socket.on('update', users => {
    setState(state => ({
      ...state,
      users
    }));
  });
};
