import mongoose from 'mongoose';
import Level from '../models/level.models.js';
import Question from '../models/question.models.js';

export const getQuestionByLevelId = async (req, res, next) => {
    try{
        const { levelId } = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(levelId)){
            return res.status(400).json({
                success: false,
                message: 'Invalid'
            });
        }

        const questions =await Question.find({ levelId});

        if(!questions){
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }

        res.status(200).json({
            success: true,
            data: questions
        });

    }catch(error){
        next(error);
    }
};

export const getQuestionById = async (req, res, next) => {
    try{
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(questionId)){
            return res.status(400).json({
                success: false,
                message: 'Invalid question ID'
            });
        }

        const question = await Question.findById(id);

        if(!question){
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }   

        res.status(200).json({
            success: true,
            data: question
        });
    }catch(error){
        next(error);
    }
}

export const createQuestion = async (req, res, next) => {
    try{
        const {
            levelId,
            title,
            description,
            testCases
        } = req.body;

        if(!mongoose.Types.ObjectId.isValid(levelId)){
            return res.status(400).json({
                success: false,
                message: 'Invalid level ID'
            });
        }

        const question = await Question.create({
            levelId, title, description, testCases
        }
        );
        res.status(201).json({
            success: true,
            data: question
        })

    }catch(error){
        next(error);
    }
};

export const updateQuestion = async (req, res, next) => {
    try{
        const { id } = req.params;
        const question = await Question.findByIdAndUpdate(id, req.body, { new: true});

        if(!question){
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }
        res.status(200).json({
            success: true,
            data: question
        })

    }catch(error){
        next(error);
    }
};

export const deleteQuestion = async (req, res, next) => {
    try{
        const { id } = req.params;
        const question = await Question.findByIdAndDelete(id); 
        if(!question){
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Question deleted successfully'
        });
    }catch(error){
        next(error);
    }
}