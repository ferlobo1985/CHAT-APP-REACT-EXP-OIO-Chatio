const { client } = require('../config/openai.config')

let history = [];
const messageHandler = async(socket,data)=>{
    try {
        // throw new Error("Testing error handling")

        // Extract the message and history from the data
        const aiResponse = await client.chat.completions.create({
            // model:'gpt-4.1-mini',
            model:'openai/gpt-4.1-mini',
            messages: [
                {role:'system',content:'Respond in a casual, friendly way. Include emojis in your replies.'},
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
    } catch(error){
        //console.log('AI response error', error)
        socket.emit('ai-error',{
            chatID:data.id,
            content:"Sorry, something went wrong with the AI response. Please try again later.",
            error: error.message || error.toString()
        })
    }
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