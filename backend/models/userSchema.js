// Fixed userSchema.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Fixed typo
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    followers: {
        type: Array,
        default: [] // Fixed typo
    },
    following: {
        type: Array,
        default: []
    }
}, { timestamps: true }); // Fixed timestamp typo

const User = mongoose.model("User", userSchema); // Fixed spelling
export default User; // Changed to match your controller's default import