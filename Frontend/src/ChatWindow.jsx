import Chat from "./Chat.jsx"
import { FaChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ChatWindow = () => {
  return (
    <div className="bg-[#212121] h-screen w-full flex flex-col justify-between items-center text-center">        {/* Chat Window */}

    {/*  Navbar */}

        <div className="w-full flex justify-between items-center cursor-pointer">
            <span className="flex items-center gap-1 my-[1rem] mx-[2rem]">
              NovaChat <FaChevronDown className="text-sm" />
            </span>
          <div className="my-[1rem] mx-[2rem]">
            <span className="bg-[#339cff] h-[25px] w-[25px] flex items-center justify-center rounded-full">
              <FaUser />
            </span>
          </div>
        </div>

    {/*  Chat display */}

        <Chat></Chat>

    {/*  Input */}

        <div className="">                           {/* Chat Input */}
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2">                               {/* Useer Input */}
              <input placeholder="Ask anything" className="bg-transparent text-white outline-none flex-1 p-[20px] "/>

              <div id="submit" className="cursor-pointer text-white flex items-center"><IoSend /></div>
            </div>
            <p className="pt-5">                      {/* Info */}  
                NovaChat can make mistakes. Check important info. See Cookie Preferences.
            </p>
        </div>
    </div>
  )
}

export default ChatWindow