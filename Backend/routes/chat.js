import express from "express"
import Thread from "../models/Thread.js"


const router=express.Router()

// test collection
router.post("/test",async (req,res) => {
    try {
        const thread=new Thread({
            threadId: "abc",
            title:"Testing New Thread2"
        });

        const response=await thread.save()
        res.send(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Failed to save in Db"})
    }
})

// Get all threads
router.get("/thread",async (req,res) => {
    try {
        const threads=await Thread.find({}).sort({updatedAt:-1})
        res.json(threads)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Failed to fetch threads"})
    }
})

router.get("/thread/:threadId",async (req,res) => {
    const {threadId}=req.params

    try {
        const thread=await Thread.findOne({threadId})

        if(!thread){
            res.status(404).json({error:"Thread is not found"})
        }

        res.json(thread.messages)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Failed to fetch chat"})
    }
})

router.delete("/thread/:threadId",async (req,res) => {
    try {
        const deleteThread=await Thread.findByIdAndDelete({threadId})

        if(!deleteThread){
            res.status(404).json({error:"Thread could not be deleted"})
        }
        res.status(200).json({success:"thread deleted successfully"})
    } catch (error) {
        console.log(error)  
        res.status(500).json({error:"Failed to delete threads"})
    }
})



export default router