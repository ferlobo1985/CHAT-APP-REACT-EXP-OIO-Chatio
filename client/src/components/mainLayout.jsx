import ChatPanel from "./chat/ChatPanel"

export default function MainLayout() {
  return (
    <div className="--dark-theme" id="chat">
        <div className="chat_box">
            <ChatPanel/>
        </div>
        <div className="chat_panel">
            input
        </div>
        <div className="side_panel">
            side
        </div>
    </div>
  )
}
