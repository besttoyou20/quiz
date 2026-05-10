import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true   
    },
    levelNumber: {
        type: Number,
        required: true,
    },
    title: {
        type: String
    },
    passingScore: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Level = mongoose.model('Level', levelSchema);

export default Level;