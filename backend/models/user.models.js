import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    currentLevel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        default: null,
    },
    totalScore: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;