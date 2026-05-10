import mongoose from 'mongoose';
import Quiz  from '../models/quiz.models.js';
import Level from '../models/level.models.js';

export const getLevelsByQuizId = async (req, res, next) => {
    try{
        const quizId = req.params.quizId;

        if(!mongoose.Types.ObjectId.isValid(quizId)){
            return res.status(400).json({
                success: false,
                message: 'Invalid quiz ID'
            });
        }
        const levels = await Level.find({ quizId }).sort({order: 1});
        res.status(200).json({
            success: true,
            data: levels
        });
    }catch(error){
        next(error);
    }
}

export const createLevel = async (req, res, next) => {
    try{
        const { quizId, levelNumber, title, passingScore, order} = req.body;

        const level = await Level.create({
            quizId,
            levelNumber,
            title,
            passingScore,
            order
        });

        res.status(201).json({
            success: true,
            data: level
        });
    }catch(error){
        next(error);
    }
}

export const updateLevel = async (req, res, next) => {
    try{
        const levelId = req.params.id;
        const level = await Level.findByIdAndUpdate(levelId, req.body, { new: true });

        if(!level){
            return res.status(404).json({
                success: false,
                message: 'Level not found'
            });
        }
        res.status(200).json({
            success: true,
            data: level
        });
    }catch(error){
        next(error);
    }
}

export const deleteLevel = async (req, res, next) => {
    try{
        const levelId = req.params.id;
        const level = await Level.findByIdAndDelete(levelId);
        if(!level){
            return res.status(404).json({
                success: false,
                message: 'Level not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Level deleted successfully'
        });

    }catch(error){
        next(error);
    }
}