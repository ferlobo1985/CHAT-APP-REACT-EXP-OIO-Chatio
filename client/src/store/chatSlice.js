import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        currentChatID:null,
        chats:[],
        loading:false
    },
    reducers:{
        
        setCurrentChatId:(state,action)=>{
            state.currentChatID = action.payload;
        }
    }
})

export const { setCurrentChatId } = chatSlice.actions;
export default chatSlice.reducer;