const { client } = require('../config/openai.config')

let history = [];
const messageHandler = async(socket,data)=>{
    
    // Extract the message and history from the data
    const aiResponse = await client.chat.completions.create({
        // model:'gpt-4.1-mini',
        model:'openai/gpt-4.1-mini',
        messages: [
            ...data.messages
        ],
        stream:true,
        temperature:0.5,
        max_tokens:200
    });

    for await (const chunk of aiResponse) {
        const content = chunk.choices[0]?.delta?.content || '';
        if(content){
            socket.emit('ai-response',{
                chatID:data.id,
                content: content,
                role:'assistant'
            })
        }
        await new Promise(resolve=> setTimeout(resolve, 150))
    }

    // Extract the content of the AI response
    // const aiMessage = aiResponse?.choices[0]?.message?.content;
    // const aiResponseContent = {
    //     chatID:data.id,
    //     content: aiMessage ? aiMessage:'No response from AI',
    //     role:'assistant'
    // }
    //messageHistory(data,aiResponseContent)
    // socket.emit('ai-response',aiResponseContent)
}

const messageHistory = (data,response) => {
    const chat = history.find(chat => chat.id === data.id);
    if(chat){
        chat.messages.push(response)
    } else {
        history.push({
            id:data.id,
            messages:[
                ...data.messages,
                response
            ]
        })
    }
    //console.log(JSON.stringify(history))
}


module.exports = { messageHandler }