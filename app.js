var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('new message', function(message){
        io.emit('new message', message);
    });
    console.log('Someone has entered the chat room!');
});

app.use('/jquery',express.static('node_modules/jquery/dist/'))
app.use('/socket',express.static('node_modules/socket.io-client/dist/'))


app.use(express.static('public'));

server.listen('3000',function() {
    console.log('Listening on Port 3000');
});