import mongoose from 'mongoose';
import Quiz  from '../models/quiz.models.js';
import Level from '../models/level.models.js';

export const getAllQuiz = async (req, res, next) => {
    try{
        const quiz = await Quiz.find();

        res.status(200).json({
            success: true,
            data: quiz
        })
    }catch(error){
        next(error);
    }
}

export const getQuizById = async (req, res, next) => {
    try{
        const quizId = req.params.id;
        const quiz = await Quiz.findById( quizId);

        if(!quiz){
            return res.status(404).json({
                success: false,
                message: 'Quiz not found'
            })
        }

        const levels = await Level.find({ quizId: quizId }).sort({order: 1});
        res.status(200).json({
            success: true,
            data: {
                quiz,
                levels
            }
        })

    }catch(error){
        next(error);
    }
}

export const createQuiz = async (req, res, next) => {
    try{
        const { title, description, language} = req.body;

        const quiz = await Quiz.create({
            title,
            description,
            language
        })

        res.status(201).json({
            success: true,
            data: quiz
        })

    }catch(error){
        next(error);
    }
}

export const updateQuiz = async ( req, res, next) => {
    try{
        const quizId = req.params.id;
        const quiz = await Quiz.findByIdAndUpdate( quizId, req.body, { new: true});

        if(!quiz){
            return res.status(404).json({
                success: false,
                message: 'Quiz not found'
            })
        }
        res.status(200).json({
            success: true,
            data: quiz
        })

    }catch(error){
        next(error);
    }
}

export const deleteQuiz = async (req, res, next) => {
    try{
        const quizId = req.params.id;
        const quiz = await Quiz.findByIdAndDelete( quizId);

        if(!quiz){
            return res.status(404).json({
                success: false,
                message: 'Quiz not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Quiz deleted successfully'
        })

    }catch(error){
        next(error);
    }
}