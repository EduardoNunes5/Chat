const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');


const chatRouter = require('./routes/chatRouter');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(chatRouter);


io.on('connection', socket =>{
    socket.on('name user', username=>{
        socket.username = username;
    })

    socket.on('chat message', msg =>{
        msg = `${socket.username}, ${Intl.DateTimeFormat('pt-br',{hour:'numeric', minute:'numeric'}).format(new Date())}: ${msg}`;
        io.emit('chat message', msg);
    })

});


const port = process.env.PORT || 8080;
http.listen(port, function(){
    console.log('listening on port: ', port);
});
