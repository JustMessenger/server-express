const socketIo = require('socket.io');
const io = socketIo();
const socketApi = {};

socketApi.io = io;

io.on('connection', (socket) => {
    console.log('A user connected');
});

socketApi.sendNotification = () => {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

export default socketApi;