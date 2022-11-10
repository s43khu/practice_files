var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendfile('msg.html');
});

//running when someone connected
io.on('connection',(socket)=>{
    console.log("user connected!!");
    socket.on('msg',(data)=>{
        io.sockets.emit('newmsg',data);
    });
// someone disconnects
socket.on('disconnect',()=>{
    console.log("user disconnected!!");
 });
});

http.listen(4000,()=>{
    console.log('on 4000 -_-');
});