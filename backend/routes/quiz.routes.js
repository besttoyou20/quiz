import express from 'express';
import { getAllQuiz, getQuizById, createQuiz, updateQuiz, deleteQuiz } from '../controller/quiz.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const quizRouter = express.Router();

quizRouter.get('/', getAllQuiz);
quizRouter.get('/:id', getQuizById);
quizRouter.post('/', authMiddleware, createQuiz);
quizRouter.put('/:id', authMiddleware, updateQuiz);
quizRouter.delete('/:id', authMiddleware, deleteQuiz);

export default quizRouter;