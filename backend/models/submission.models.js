import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    code: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    },
    passed: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;