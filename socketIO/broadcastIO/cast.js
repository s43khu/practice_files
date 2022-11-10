var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendfile('broad.html');
});

//running when someone connected
var clients=0;
io.on('connection',(socket)=>{
    clients++;
  socket.emit('broadcast',{desc:clients+' clients connected!'});
// someone disconnects
socket.on('disconnect',()=>{
    clients--;
   socket.emit('broadcast',{desc:clients+' clients connected!'});
 });
});

http.listen(4000,()=>{
    console.log('on 4000 -_-');
});