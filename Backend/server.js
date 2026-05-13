// // Make sure to include the following import:
//  import {GoogleGenAI} from '@google/genai';
//  import dontenv from "dotenv"

//  dontenv.config()
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// const response = await ai.models.generateContent({
//   model: "gemini-2.0-flash",
//   contents: "Write a story about a magic backpack.",
// });
// console.log(response.text);


import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"

dotenv.config()
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "What is the capital of China",
  });
  console.log(response.text);
}

main();