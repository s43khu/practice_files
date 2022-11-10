var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendfile('pri.html');
});

//running when someone connected
var UID=[];
io.on('connection',(socket)=>{
    
    console.log("user connected!!");
    socket.on('register',(data)=>{
        socket.username=data;
        UID.user=socket;
        console.log(UID);
        io.sockets.emit('print',{users:UID});
       
    });
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