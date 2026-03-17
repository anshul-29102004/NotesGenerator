import express from "express"
import isAuth from "../middleware/isAuth.js";
import { generateQuiz } from "../controllers/quiz.controller.js";

const quizRouter=express.Router();

quizRouter.post("/generate-quiz",isAuth,generateQuiz);

export default quizRouter;