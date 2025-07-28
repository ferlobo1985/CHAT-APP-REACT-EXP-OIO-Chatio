const { Server } = require('socket.io');
const { messageHandler } = require('./handlers')

const registerSocketServer = (server) => {
    const io = new Server(server,{
        cors:{
            origin:'*', // allow all origins...adjust to your needs
            methods:['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        //console.log(`User: ${socket.id}`)
        socket.on('user-message',(data)=>{
            messageHandler(socket,data)
        })
    })
}

module.exports = { registerSocketServer }
