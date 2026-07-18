import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
    try {
        // 1. Extract values directly from req.body (NO JSON.parse here!)
        const { description } = req.body; 
        
        // 2. Grab the validated userId attached by your isAuthenticated middleware
        const userId = req.user; 

        if (!description) {
            return res.status(400).json({
                message: "Tweet description is required",
                success: false
            });
        }

        // 3. Create the document matching your schema keys exactly
        const newTweet = await Tweet.create({
            description,
            userId: userId // Maps directly to your schema reference key
        });

        return res.status(201).json({
            message: "Tweet created successfully!",
            success: true,
            tweet: newTweet
        });

    } catch (error) {
        console.log("Error inside createTweet:", error);
        return res.status(500).json({
            message: "Server error while creating tweet",
            success: false
        });
    }
};