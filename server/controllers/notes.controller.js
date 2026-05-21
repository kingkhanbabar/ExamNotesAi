// import { content } from "pdfkit/js/page";
import Notes from "../models/notes.model.js"

export const getMyNotes = async (req,res)=>{
    try {
        const notes = await Notes.find({user:req.userId}).select("topic classLevel examType revisionMode includeDiagram includeChart createdAT").sort({createdAt: -1})
       if(!notes){
        return res.status(404).json({
            error:"Note Not Found"
        });
       }
        return res.status(200).json(notes)
    } catch (error) {
        return res.status(500).json({message:`getCurrentUser notes error ${error}`})
    }
}

export const getSingleNotes = async (req,res) =>{
    try {
        const notes = await Notes.findOne({
            _id:req.params.id,
            user:req.userId
        })
         if(!notes){
        return res.status(404).json({
            error:"Note Not Found"
        });
       }
       return res.json({
        content:notes.content,
        topic:notes.topic,
        createsAt:notes.createdAt
       });
    } catch (error) {
        return res.status(500).json({message:`getSingle notes error ${error}`})
    }
}