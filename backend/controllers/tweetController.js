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

export const deleteTweet = async (req,res) => {
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message: "tweet deleted succesfully",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}

export const likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.user;
        const tweetId = req.params.id;

        const tweet = await Tweet.findById(tweetId);

        if (!tweet) {
            return res.status(404).json({
                message: "Tweet does not exist",
                success: false
            });
        }

        if (tweet.like.includes(loggedInUserId)) {
            await Tweet.findByIdAndUpdate(
                tweetId,
                {
                    $pull: { like: loggedInUserId }
                }
            );

            return res.status(200).json({
                message: "Tweet disliked",
                success: true
            });
        }

        await Tweet.findByIdAndUpdate(
            tweetId,
            {
                $push: { like: loggedInUserId }
            }
        );

        return res.status(200).json({
            message: "Tweet liked",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

