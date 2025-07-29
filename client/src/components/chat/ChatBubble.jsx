import { HiUserCircle } from 'react-icons/hi2';
import { RiRobot3Fill } from 'react-icons/ri'


export default function ChatBubble({data}) {

    console.log(data)

  return (
    <div
        className='chat_box_container'
    >
        <div className='person'>
            <div className='person_avatar'>
                <HiUserCircle/>
            </div>
        </div>
        <div className='chat_box_context'>
            <div className='chat_box_bubble'>
                <span>Hello, this is a fake content</span>
            </div>
        </div>
    </div>
  )
}
