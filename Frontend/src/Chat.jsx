import {useContext, useState, useEffect} from 'react'
import {MyContext} from "./MyContext"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {
  const {newChats, prevChats,reply} = useContext(MyContext)
  const [latestReply, setLatestReply] = useState(null);

  useEffect(()=>{
      if (reply === null) {
      setLatestReply(null);
      return;
    }

    if (!prevChats?.length) return;

    const content = reply.split(" ");

    let idx = 0;
    const intervel = setInterval(() => {
      setLatestReply(content.slice(0, idx + 1).join(" "));

      idx++;
      if (idx >= content.length) clearInterval(intervel);
    }, 40);
    return () => clearInterval(intervel);
  }, [reply, prevChats]);

  return (
     <div className="flex-1 flex flex-col min-h-0">
      {newChats && <h1 className='text-[30px] flex justify-center text-center'>Start a new Chat!</h1>}
      
     <div className='flex-1 min-h-0 w-full max-w-[700px] mx-auto overflow-y-auto px-[2rem] py-[1rem]'>

        {prevChats?.slice(0,-1).map((chat, idx) => (
           <div className="flex flex-col w-full text-[14px]" key={idx}>
          {chat.role === "user" ? (
            <div className="w-full mb-2 flex justify-end">
              <p className="text-white bg-gray-500 px-3 py-2 rounded-xl max-w-[60%]">
                {chat.content}
              </p>
            </div>
          ) : (
            <div className="w-full">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {chat.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        ))}

        {prevChats.length > 0 && latestReply !== null && (
        <div key={"typing"}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {latestReply}
          </ReactMarkdown>
        </div>
      )}

      </div>
    </div>
  )
}

export default Chat