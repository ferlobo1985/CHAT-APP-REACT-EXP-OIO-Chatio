const { Server } = require('socket.io')

const registerSocketServer = (server) => {
    const io = new Server(server,{
        cors:{
            origin:'*', // allow all origins...adjust to your needs
            methods:['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        console.log(`User: ${socket.id}`)
    })
}

module.exports = { registerSocketServer }
