import { FaEdit } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import logo from "./assets/blacklogo.png"  // ✅ yeh add karo
import {v1 as uuidv1} from "uuid"

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(MyContext)
  const { allThreads, setAllThreads, currentThreadId , setNewChats, setPrompt, setReply, setCurrentThreadId, setPrevChats} = useContext(MyContext)

  const getAllThreads=async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/thread`)
      const res=await response.json()
      const filterData = res.map(thread=>({thread:thread.threadId, title: thread.title}))
      console.log(filterData)
      setAllThreads(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getAllThreads();
  },[currentThreadId])

  const createNewChat=() => {
    setNewChats(true)
    setPrompt("")
    setReply(null)
    setCurrentThreadId(uuidv1())
    setPrevChats([])
  }

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className={`bg-[#171717] text-[#b4b4b4] h-screen flex flex-col justify-between flex-shrink-0 z-20 transition-all duration-300 fixed
  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'} 
  w-[250px] sm:w-[200px] lg:w-80`}>

        {/* Button */}
        <button className="flex items-center justify-between w-[calc(100%-20px)] rounded-[10px] bg-transparent border border-white/80 cursor-pointer m-[10px] p-[10px] hover:bg-white/5">
          <img 
            src={logo}  // ✅ yeh change karo
            alt="gpt logo" 
            className="h-[25px] w-[25px] bg-[#fff] rounded-full object-cover flex-shrink-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <FaEdit className={`text-white text-xl ${sidebarOpen ? 'block' : 'hidden'} sm:block`} onClick={createNewChat}/>
        </button>

        {/* History */}
        <ul className="m-[10px] p-[10px] h-full list-none">
          {allThreads.map((thread) => (
            <li key={thread.id} className={`cursor-pointer py-[8px] px-[10px] mb-[2px] text-[14px] rounded-lg hover:bg-white/5 
              ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
              {thread.title}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className={`m-[10px] p-[10px] text-[14px] text-center border-t border-white/50 
          ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
          <p>By Arya &hearts;</p>
        </div>

      </section>
    </>
  )
}

export default Sidebar