import { HiUserCircle } from 'react-icons/hi2';
import { RiRobot3Fill } from 'react-icons/ri'


export default function ChatBubble({data}) {


  return (
    <div
        className={`chat_box_container ${data.role === 'user'?'user':'reversed'}`}
    >
        <div className='person'>
            <div className='person_avatar'>
                {data.role === 'user' ?
                    <HiUserCircle/>
                    :
                    <RiRobot3Fill/>
                }
                
            </div>
        </div>
        <div className='chat_box_context'>
            <div className='chat_box_bubble'>
                <span>{data.content}</span>
            </div>
        </div>
    </div>
  )
}
