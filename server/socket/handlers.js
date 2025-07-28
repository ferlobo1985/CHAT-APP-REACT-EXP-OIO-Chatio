const messageHandler = async(socket,data)=>{
    

    const aiResponseContent = {
        chatID:data.id,
        content: 'Response something cool..',
        role:'assistant'
    }
    socket.emit('ai-response',aiResponseContent)
}

module.exports = { messageHandler }