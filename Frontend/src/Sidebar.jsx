import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./MyContext.jsx";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(MyContext)

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className={`bg-[#171717] text-[#b4b4b4] h-screen flex flex-col justify-between flex-shrink-0 z-20 transition-all duration-300 fixed sm:relative ${sidebarOpen ? 'w-[250px]' : 'w-[60px]'} sm:w-[200px] lg:w-80`}>

        {/* Button */}
        <button className="flex items-center justify-between w-[calc(100%-20px)] rounded-[10px] bg-transparent border border-white/80 cursor-pointer m-[10px] p-[10px] hover:bg-white/5">
          <img 
            src="src/assets/blacklogo.png" 
            alt="gpt logo" 
            className="h-[25px] w-[25px] bg-[#fff] rounded-full object-cover flex-shrink-0"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <FaEdit className={`text-white text-xl ${sidebarOpen ? 'block' : 'hidden'} sm:block`} />
        </button>

        {/* History */}
        <ul className="m-[10px] p-[10px] h-full list-none">
          {["thread1", "thread2", "thread3"].map((item) => (
            <li key={item} className={`cursor-pointer py-[8px] px-[10px] mb-[2px] text-[14px] rounded-lg hover:bg-white/5 
              ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
              {item}
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