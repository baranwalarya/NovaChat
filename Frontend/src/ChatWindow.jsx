import Chat from "./Chat.jsx"
import { FaChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { FiX, FiSettings, FiLogOut } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { ClipLoader } from "react-spinners"

const ChatWindow = () => {
  const { setSidebarOpen, sidebarOpen, prompt, setPrompt, reply, setReply, currentThreadId, setCurrentThreadId, prevChats, setPrevChats, setNewChats } = useContext(MyContext)
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const getReply = async () => {
    setLoading(true)
    setNewChats(false)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt, threadId: currentThreadId })
    }
    try {
      const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080"
      const response = await fetch(`${BASE_URL}/api/chat`, options)
      const res = await response.json()
      setReply(res.reply)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (reply) {
      setPrevChats(prevChats => (
        [...prevChats, {
          role: "user",
          content: prompt
        }, {
          role: "assistant",
          content: reply
        }]
      ))
      setPrompt("")
    }
  }, [reply])

  // Bahar click karne pe band ho
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.dropdown-wrapper')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="bg-[#212121] h-screen w-full flex flex-col overflow-hidden transition-all duration-300 sm:pl-[200px] lg:pl-80 justify-between sm:justify-start">

      {/* Navbar */}
      <div className="w-full flex justify-between items-center">

        <span className="flex items-center gap-2 my-[1rem] mx-[1rem]">
          {sidebarOpen ? (
            <FiX
              className="text-xl sm:hidden cursor-pointer flex-shrink-0"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          ) : (
            <RiMenu3Line
              className="text-xl sm:hidden cursor-pointer flex-shrink-0"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          )}
          NovaChat
          <FaChevronDown className="text-sm" />
        </span>

        {/* User icon + dropdown */}
        <div className="my-[1rem] mx-[2rem] relative dropdown-wrapper">
          <span
            className="bg-[#339cff] h-[32px] w-[32px] flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaUser />
          </span>

          {isOpen && (
            <div className="absolute top-[120%] right-0 bg-[#2f2f2f] rounded-[10px] shadow-lg z-50 min-w-[180px]">
              <div className="px-[14px] py-[10px] text-[14px] hover:bg-white/10 cursor-pointer rounded-t-[10px] flex items-center gap-2">
                <FiSettings className="text-[16px]" /> Settings
              </div>
              <div className="px-[14px] py-[10px] text-[14px] hover:bg-white/10 cursor-pointer flex items-center gap-2">
                <BsStars className="text-[16px] text-yellow-400" /> Upgrade Plan
              </div>
              <div className="px-[14px] py-[10px] text-[14px] hover:bg-white/10 cursor-pointer rounded-b-[10px] flex items-center gap-2 text-red-400">
                <FiLogOut className="text-[16px]" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat display */}
      <Chat />

      {/* ClipLoader */}
      <div className="flex justify-center items-center py-2">
        <ClipLoader color="#ffffff" size={30} loading={loading} />
      </div>

      {/* Input */}
      <div className="w-full px-[20px] sm:px-[40px] md:px-[80px] lg:px-[120px] xl:px-[200px] pb-[20px]">
        <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2">
          <input
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
            className="bg-transparent text-white outline-none flex-1 p-[20px]"
          />
          <div
            id="submit"
            className="cursor-pointer text-white/80 flex items-center h-[35px] w-[35px] text-[20px] hover:text-[#fff]"
            onClick={getReply}
          >
            <IoSend />
          </div>
        </div>
        <p className="pt-5 text-[#b4b4b4] text-[0.9rem] text-center">
          NovaChat can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>

    </div>
  )
}

export default ChatWindow