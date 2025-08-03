import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        currentChatID:null,
        chats:[],
        loading:false
    },
    reducers:{
        storeMessage:(state,action)=>{
            const {message,chatID} = action.payload;
            const chat = state.chats.find(chat=> chat.id === chatID)
            if(chat){
                chat.messages.push(message);
            } else{ 
                state.chats.push({
                    id:chatID,
                    messages:[message]
                })
            }
            state.loading = true;
        },
        storeResponse:(state,action)=>{
            const { content, role, chatID } = action.payload;
            const chat = state.chats.find(chat=> chat.id === chatID);

            const isAssistant = chat.messages.at(-1).role === 'assistant'
            if(chat && !isAssistant){
                chat.messages.push({
                    role,
                    content
                })
            } else {
                const lastMessage = chat.messages.at(-1);
                lastMessage.content += content
            }
            state.loading = false;
        },
        removeChat:(state,action)=>{
            const chatID = action.payload;
            state.chats = state.chats.filter(chat=> chat.id !== chatID)
            if(state.currentChatID === chatID){
                state.currentChatID = null;
            }

        },
        setCurrentChatId:(state,action)=>{
            state.currentChatID = action.payload;
        }
    }
})

export const { setCurrentChatId, storeMessage, storeResponse, removeChat } = chatSlice.actions;
export default chatSlice.reducer;