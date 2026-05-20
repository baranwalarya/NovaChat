import './App.css'
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./ChatWindow.jsx"
import { MyContext } from './MyContext.jsx'
import { useState } from 'react'
import { v1 as uuidv1 } from "uuid"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [prompt,setPrompt] =useState("")
  const [reply,setReply] = useState(null)
  const [currentThreadId,setCurrentThreadId] = useState(uuidv1())
  const [prevChats,setPrevChats]=useState([])  //store all prev chats of curr thread
  const [newChats,setNewChats]=useState(true) //store all prev chats of curr thread


  const providerValues = {  sidebarOpen, setSidebarOpen ,
                            prompt,setPrompt,
                           reply,setReply,
                           currentThreadId,setCurrentThreadId,
                           newChats,setNewChats,
                           prevChats,setPrevChats
                        }

  return (
    <div className='flex h-screen w-screen bg-[#212121] text-[#ececec] font-sans m-0 p-0 overflow-hidden'>
      <MyContext.Provider value={providerValues}>
        <Sidebar />
        <ChatWindow />
      </MyContext.Provider>
    </div>
  )
}

export default App