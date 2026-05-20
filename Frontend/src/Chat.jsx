import {useContext} from 'react'
import {MyContext} from "./MyContext"

function Chat() {

  const {newChats}=useContext(MyContext)

  return (
    <div>
      {newChats && <h1 className='text-[30px] flex justify-center text-center'>Start a new Chat! </h1>}
      {/* Chats */}
      <div>        

      </div>
    </div>
  )
}

export default Chat