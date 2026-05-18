import { FaEdit } from "react-icons/fa";

function Sidebar() {
  return (
    <section className="bg-[#171717] text-[#b4b4b4] h-screen w-80 flex flex-col justify-between ">
      {/* New Chat button */}

      <button className="flex items-center justify-between w-[calc(100%-20px)] rounded-[10px] bg-transparent border border-white/80 cursor-pointer m-[10px] p-[10px] hover:bg-white/5">
          <img src="src/assets/blacklogo.png" alt="gpt logo" className="h-[25px] w-[25px] bg-[#fff] rounded-full object-cover" />
          <FaEdit className="text-white text-xl" />
      </button>

      {/* History */}

      <ul className="m-[10px] p-[10px] h-full list-none">
          {["thread1", "thread2", "thread3"].map((item) => (
            <li key={item} className="cursor-pointer py-[8px] px-[10px] mb-[2px] text-[14px] relative rounded-lg hover:bg-white/5">
              {item}
            </li>
          ))}
      </ul>

      {/* Sign In and other */}

      <div className="m-[10px] p-[10px] text-[16px] text-center border-t border-white/50">
        <p>By Arya &hearts;</p>
      </div>

    
    </section>
  )
}

export default Sidebar