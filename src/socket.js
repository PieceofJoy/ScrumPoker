
import io from 'socket.io-client';

export const socket = io.connect('http://localhost:80/');

export const createRoom = () => {
    socket.emit('create', '');
};

export const initSocket = (state, history) => {
    socket.on('created', (roomId) => {
        history.push(`/room/${roomId}`);
    });
}

