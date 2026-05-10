import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    currentLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    completeLevel: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Level'
        }
    ]
}, {timestamps: true});

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;