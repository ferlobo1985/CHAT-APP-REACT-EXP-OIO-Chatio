const { client } = require('../config/openai.config')

const messageHandler = async(socket,data)=>{
    
    // Extract the message and history from the data
    const aiResponse = await client.chat.completions.create({
        model:'gpt-4.1-mini',
        messages: [
            ...data.messages
        ]
    });

    // Extract the content of the AI response
    const aiMessage = aiResponse?.choices[0]?.message?.content;
    const aiResponseContent = {
        chatID:data.id,
        content: aiMessage ? aiMessage:'No response from AI',
        role:'assistant'
    }
    socket.emit('ai-response',aiResponseContent)
}

module.exports = { messageHandler }