import mongoose from 'mongoose';
import Progress from '../models/progress.models.js';
import Level from '../models/level.models.js';

export const getUserProgress = async (req, res, next) => {
    try{
        const userId = req.user._id;
        const quizId = req.params.quizId;
        //mencari progress user untuk quiz tertentu
        let progress = await Progress.findOne({userId, quizId})
            .populate('currentLevel')
            .populate('completeLevel');

        //kalau progress belum ada, buat baru dengan level pertama
        if(!progress){
            const firstLevel = await Level.findOne({ quizId}).sort({ order: 1});

                progress = await Progress.create({
                    userId,
                    quizId,
                    currentLevel: firstLevel ? firstLevel._id : null,
                    completeLevel: []
                });
            return res.status(404).json({
                success: false,
                message: 'Progress not found'
            });
        }
        
        //cari next Level
        let nextLevel = null;

        if(progress.currentLevel){
            const current = await Level.findById(progress.currentLevel);
            nextLevel = await Level.findOne({
                quizId,
                order: current.order + 1
            })
        }

        res.status(200).json({
            success: true,
            data: progress,
            nextLevel: nextLevel || null
        });
        await Progress.save();
    }catch(error){
        next(error);
    }
}