const port = 4000;
const express = require ('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


server.listen(port, () => {
    console.log(`Server opened at http://localhost:${port}`)
});

io.set('origin', '*:*');

io.on('connection', (socket) => {
    console.log('User connected');

    // socket.on('post scriptum', (data) => {
    //     console.log(data);
    //     socket.on('youhou', 'Wesh ma gueule');

    // })

    // setInterval(() => {
    //     socket.emit('ping', "It's me, your server");
    // }, 1000);

    socket.on('change color', (color) => {
        console.log(color);
        socket.emit("color received", color);
        socket.broadcast.emit("color received", color);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
})