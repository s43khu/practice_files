var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('privmsg.html');
});

io.on('connection', function(socket) {
   console.log('A user connected');

    
  socket.on('msg', function(data) {
        io.sockets.emit('newmsg', data);
   })
  socket.on('msg1', function(data) {
        io.sockets.emit('newmsg1', data);
   })
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});