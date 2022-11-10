var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var myusers=[];
var mysocket=[];
app.get('/',(req,res)=>{
    res.sendfile('msg.html');
});
var i=0;
io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('msg',function(data)
    {
        var m=0;
        for(k=0;k<i;k++)
        {
            if (myusers[k]==data.user2)
            {
                console.log("match found");
                //console.log(mysocket[k]);
                mysocket[k].send(data.user + ":"+data.message+" (to:"+data.user2+")(-_-)");
                m=1;
                break;
            }
        }
    
        if(m==0)
        io.sockets.emit('newmsg',data);
    })
    socket.on('sentnickname',function(data){
    console.log(data);
    myusers[i]=data.username;
    mysocket[i]=socket;
    console.log(myusers[i]);
    i++;
    io.sockets.emit('recnickname',data);
    });
    socket.on('disconnect',function(){
        console.log('a user disconnected');
    });
});
http.listen(4000, function() {
   console.log('stupid portno:4000');
});