import express from "express"
import isAuth from "../middleware/isAuth";
import { generateQuiz } from "../controllers/quiz.controller";

const quizRouter=express.Router();

quizRouter.post("/generate-quiz",isAuth,generateQuiz);

export default quizRouter;