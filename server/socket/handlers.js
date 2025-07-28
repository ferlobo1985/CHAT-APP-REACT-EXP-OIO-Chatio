const messageHandler = async(socket,data)=>{
    console.log(`Received message from ${socket.id}`,data)
}

module.exports = { messageHandler }