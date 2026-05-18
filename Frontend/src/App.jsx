import './App.css'
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./ChatWindow.jsx"
import { MyContext } from './MyContext.jsx'

function App() {

  const providerValues = {}

  return (
    <div className='flex h-screen w-screen bg-[#212121] text-[#ececec] font-sans m-0 p-0'>
      <MyContext.Provider value = {providerValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
  )
}

export default App
