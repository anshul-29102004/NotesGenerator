import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js";

dotenv.config();


const app=express();
const PORT=process.env.PORT; 

app.get("/",(req,res)=>{
    res.json({message:"Backend is running"})
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
    connectDb();
})

