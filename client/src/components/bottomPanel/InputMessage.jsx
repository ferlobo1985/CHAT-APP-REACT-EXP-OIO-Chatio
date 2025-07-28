import { useState } from "react"

export default function InputMessage() {
  const [content,setContent] = useState("");


  const sendMessage = () => {
    console.log(content)

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
