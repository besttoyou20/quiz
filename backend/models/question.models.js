import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    levelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
    title: {
        type: String,

    },
    description: {
        type: String,
    },
    testCases: [
        {
            input: {type: String, required: true},
            expectedOutput: {type: String, required: true}
        }
    ]

}, {timestamps: true});

const Question = mongoose.model('Question', questionSchema);

export default Question;