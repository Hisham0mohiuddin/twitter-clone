import mongoose from "mongoose";

const tweetSchema  = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    like :{
        type:Array,
        default: []
    },
    userDetails : {
        type:Array,
        defualt : []
    }
},{timestamps: true})

export const Tweet = mongoose.model("Tweet", tweetSchema);