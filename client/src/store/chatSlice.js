import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        currentChatID:null,
        chats:[],
        loading:false
    },
    reducer:{

    }
})

export default chatSlice.reducer;