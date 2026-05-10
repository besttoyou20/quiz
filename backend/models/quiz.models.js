import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        enum: ['python', 'javascript', 'java', 'c++', 'sql'],
        required: true
    },
}, {timestamps: true});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;