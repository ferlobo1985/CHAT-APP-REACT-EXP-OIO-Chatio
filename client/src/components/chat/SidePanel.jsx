import { useState } from "react"
import { setCurrentChatId } from "../../store/chatSlice";
import { useSelector, useDispatch } from 'react-redux';
import { IoCloseCircle, IoMenu } from 'react-icons/io5'
import { v4 as uuid } from 'uuid'

export default function SidePanel() {
    const [ openNav, setOpenNav] = useState(false);
    const dispatch = useDispatch();
    const { chats, currentChatId } = useSelector((state)=> state.chat)


    const handleNewChat = () => {
        const newChatId = uuid();
        dispatch(setCurrentChatId(newChatId))
    }

    const toggleNav = () => {
        setOpenNav(!openNav)
    }
    

    return (
        <>
            <button className="openbtn" onClick={toggleNav}>
                <IoMenu/>
            </button>

            <div id="mySidePanel" className={`sidepanel ${openNav ? 'active':''}`}>
                <span className="closebtn" onClick={toggleNav}>x</span>

                <div>
                    <ul>

                        <li>
                            <span>Chat name</span>
                            <span
                                className="deleteBtn"
                                onClick={()=>alert('Delete chat')}
                            >
                                <IoCloseCircle/>
                            </span>
                        </li>

                    </ul>
                </div>

                { chats.length >= 1 && (
                    <div onClick={handleNewChat} className="new-chat-button">
                        New chat
                    </div>
                )}
                

            </div>
        </>
    )
}
