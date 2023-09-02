import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'plesae provide a name'],
    },
    email: {
        type: String,
        required: [true, 'please provide a name'],
        unique: true,
        validate: validator.isEmail,
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: [6, 'password must be atleast 6 characters long'],
        select: false,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    subscription: {
        id: String,
        status: String,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    playlist: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
            poster: String,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    ResetPasswordToken: String,
    ResetPasswordExpire: String,
});

export const User = mongoose.model('User', schema);