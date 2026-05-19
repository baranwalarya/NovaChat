import './App.css'
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./ChatWindow.jsx"
import { MyContext } from './MyContext.jsx'
import { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const providerValues = { sidebarOpen, setSidebarOpen }

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