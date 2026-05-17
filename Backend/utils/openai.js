import "dotenv/config"
import { get } from "mongoose"

const getOpenAIAPIResponse = async (message) => {
    const options={
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
    },
    body: JSON.stringify({
        model: "gemini-2.5-flash",
        messages: [{
            role: "user",
            content: message
            }]
    })
   }

    try {
        const response=await fetch("https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",options)
        const data=await response.json()
        return data.choices[0].message.content
    } catch (error) {
        console.log(error)
    }
}

export default getOpenAIAPIResponse