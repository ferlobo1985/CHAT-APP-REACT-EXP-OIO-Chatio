import { io } from 'socket.io-client';

let socket;

export const socketServer = () => {
    socket = io('http://localhost:5004');

    socket.on('connect',()=>{
        console.log(`Connected to socket server: ${socket.id}`)
    })
}


export const sendMessageToServer = ({message,chatID}) =>{
    const chat = {
        chatID,
        message
    }
    socket.emit('user-message',{
        ...chat
    })
}