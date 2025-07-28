import { useState } from "react"
import { IoCloseCircle, IoMenu } from 'react-icons/io5'

export default function SidePanel() {
    const [ openNav, setOpenNav] = useState(false)

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

                <div className="new-chat-button">
                    New chat
                </div>

            </div>
        </>
    )
}
