import { Tweet } from "../models/tweetSchema";

export const createTweet = async (req,res) => {
    try {
        const {desc, id } = req.body;
        if(!desc ||!id){
            return res.status(401).json({
                message: "Fields are required",
                success: false
            })
        }
        await Tweet.create({
            userId :id,
            description: desc
        });

        return res.status(201).json({
            message : "tweet created succesfully",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}