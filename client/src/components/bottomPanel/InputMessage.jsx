import { useState } from "react"
import { v4 as uuid } from "uuid"
import { sendMessageToServer } from "../../socket/socketClient";

import { setCurrentChatId, storeMessage } from "../../store/chatSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function InputMessage() {
  const [content,setContent] = useState("");
  const dispatch = useDispatch()
  let chatID = useSelector((state)=> state.chat.currentChatID)


  const sendMessage = () => {
    if(content.trim()){
      const message = {
        role:'user',
        content: content.trim()
      };
      if(!chatID){
        // if no chat id, create a new one
        chatID = uuid();
        dispatch(setCurrentChatId(chatID))
      }

      /// REDUX STORE
      dispatch(storeMessage({message,chatID}))

      sendMessageToServer({message,chatID}) /// SOCKET IO
      setContent("")
    } else {
       // Optionally handle empty message case
      console.log('Message content cannot be empty')
    }
  }

  const handleEnterPress = (e) => {
    if(e.key === 'Enter' && content.trim()){
      sendMessage()
    }
  }

  return (
    <div className="chat_box_panel">
        <input
            type="text"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            onKeyDown={handleEnterPress}
            placeholder="Chat with AI"
            className="chat_box_input"
        />
    </div>
  )
}
