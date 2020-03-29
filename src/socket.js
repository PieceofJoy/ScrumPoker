import io from 'socket.io-client';

const appUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:80/' : 'https://scrum-pokers.herokuapp.com';

export const socket = io.connect(appUrl);

export const createRoom = name => {
  socket.emit('create', name);
};

export const joinRoom = name => {
  socket.emit('join', name);
};

export const vote = (score) => {
  socket.emit('vote', score );
};

export const showScore = () => {
  socket.emit('showScore');
};

export const hideScore = () => {
  socket.emit('hideScore');
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

  socket.on('onShowScore', () => {
    setState(state => ({
      ...state,
      isScoreShown: true,
    }));
  });

  socket.on('onHideScore', () => {
    setState(state => ({
      ...state,
      isScoreShown: false,
    }));
  });
};
