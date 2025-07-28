import { io } from 'socket.io-client';
import { store } from '../store'

let socket;

export const socketServer = () => {
    socket = io('http://localhost:5004');

    socket.on('connect',()=>{
        ///console.log(`Connected to socket server: ${socket.id}`)
        socket.on('ai-response',(data)=>{
            console.log(data)
        })
    })
}


export const sendMessageToServer = ({message,chatID}) =>{
    let state = store.getState();
    const chat = state.chat.chats.find(chat => chat.id === chatID)

    socket.emit('user-message',{
        ...chat
    })
}