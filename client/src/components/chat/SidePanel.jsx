import { useState } from "react"
import { setCurrentChatId, removeChat } from "../../store/chatSlice";
import { useSelector, useDispatch } from 'react-redux';
import { IoCloseCircle, IoMenu } from 'react-icons/io5'
import { v4 as uuid } from 'uuid'

export default function SidePanel() {
    const [ openNav, setOpenNav] = useState(false);
    const dispatch = useDispatch();
    const { chats, currentChatID } = useSelector((state)=> state.chat)


    const handleNewChat = () => {
        const newChatId = uuid();
        dispatch(setCurrentChatId(newChatId))
    }

    const toggleNav = () => {
        setOpenNav(!openNav)
    }
    

    return (
        <>
        {chats.length > 0 && (
        <>
            <button className="openbtn" onClick={toggleNav}>
                <IoMenu/>
            </button>

            <div id="mySidePanel" className={`sidepanel ${openNav ? 'active':''}`}>
                <span className="closebtn" onClick={toggleNav}>x</span>

                <div>
                    <ul>

                    {chats.map(chat=>(
                        <li
                            key={chat.id}
                            className={`${currentChatID === chat.id ? 'active':''}`}
                        >
                            <span
                                onClick={()=>dispatch(setCurrentChatId(chat.id))}
                            >{chat.messages.length > 0 ?
                                chat.messages[0].content:"New chat"
                            }</span>
                            <span
                                className="deleteBtn"
                                onClick={()=> dispatch(removeChat(chat.id))}
                            >
                                <IoCloseCircle/>
                            </span>
                        </li>
                    ))}
                       
                    </ul>
                </div>

                { chats.length >= 1 && (
                    <div onClick={handleNewChat} className="new-chat-button">
                        New chat
                    </div>
                )}
                

            </div>
        </>
        )}
        </>
    )
}
