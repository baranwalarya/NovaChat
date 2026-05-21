import {useContext} from 'react'
import {MyContext} from "./MyContext"

function Chat() {

  const {newChats, prevChats} = useContext(MyContext)

  return (
    <div>
      {newChats && <h1 className='text-[30px] flex justify-center text-center'>Start a new Chat!</h1>}
      
      <div className='w-full max-w-[700px] mx-auto overflow-y-scroll px-[2rem] py-[1rem]'>

        {prevChats?.map((chat, idx) => (
          <div key={idx} className={chat.role === "user" ? "flex justify-end mb-4" : "text-left mb-4"}>
            <p className={chat.role === "user" ? "bg-[#323232] px-[20px] py-[10px] rounded-2xl text-[0.9rem]" : "text-[0.9rem]"}>
              {chat.content}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Chat