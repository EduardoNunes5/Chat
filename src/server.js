const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');


const chatRouter = require('./routes/chatRouter');



app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(chatRouter);
let cont = 1;
io.on('connection', socket =>{
    socket.on('chat message', msg =>{
        msg = `id(${socket.id}) às ${Intl.DateTimeFormat('pt-br',{hour:'numeric', minute:'numeric'}).format(new Date())}: ${msg}`;
        io.emit('chat message', msg);
    })

});



const port = process.env.PORT || 8080;
http.listen(port, function(){
    console.log('listening on port: ', port);
});
