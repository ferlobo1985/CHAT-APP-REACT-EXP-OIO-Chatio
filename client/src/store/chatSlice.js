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
            if(chat){
                chat.messages.push({
                    role,
                    content
                })
            }
            state.loading = false;
        },
        setCurrentChatId:(state,action)=>{
            state.currentChatID = action.payload;
        }
    }
})

export const { setCurrentChatId, storeMessage, storeResponse } = chatSlice.actions;
export default chatSlice.reducer;