import express from 'express';
import { getQuestionByLevelId, getQuestionById, createQuestion, updateQuestion, deleteQuestion } from '../controller/question.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const questionRouter = express.Router();

questionRouter.get('/level/:levelId', getQuestionByLevelId);
questionRouter.get('/:id', getQuestionById);
questionRouter.post('/', authMiddleware, createQuestion);
questionRouter.put('/:id', authMiddleware, updateQuestion);
questionRouter.delete('/:id', authMiddleware, deleteQuestion);

export default questionRouter;