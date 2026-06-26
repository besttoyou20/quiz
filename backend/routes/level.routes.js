import express from 'express';
import {getLevelsByQuizId, createLevel, updateLevel, deleteLevel} from '../controller/level.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const levelRouter = express.Router();

levelRouter.get('/:quizId', getLevelsByQuizId);
levelRouter.post('/', authMiddleware, createLevel);
levelRouter.put('/:id', authMiddleware, updateLevel);
levelRouter.delete('/:id', authMiddleware, deleteLevel);

export default levelRouter;