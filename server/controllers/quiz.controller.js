import { generateGeminiResponse } from "../services/gemini.services.js"
import { buildQuizPrompt } from "../utils/quizPrompt.js"

export const generateQuiz=async(req,res)=>{
    try {
        const {topic,numQuestions,timePerQuestion}=req.body;
        if(!topic || !numQuestions) 
        {
            return res.status(400).json({message:"Topic and number of questions required"});
        }
        const prompt=buildQuizPrompt({topic,numQuestions});
        const questions=await generateGeminiResponse(prompt);
        
        res.status(200).json({
            success:true,
            topic,
            totalQuestions:numQuestions,
            timePerQuestion,
            questions
        });
    } catch (error) {
        return res.status(500).json({success:false,message:"Quiz generation failed"})
    }
}