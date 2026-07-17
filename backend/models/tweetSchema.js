import mongoose from "mongoose";

const tweetSchema  = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        extend: true
    },
    description: {
        type: String,
        reuried: true
    },
    like :{
        type:Array,
        default: []
    },
    bookmarks:{
        type: Array,
        default: []
    }

},{timestamps: true})

export const Tweet = moongoose.model("Tweet", tweetSchema);