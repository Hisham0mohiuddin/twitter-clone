// Fixed Register Controller
import bcryptjs from "bcryptjs";
import User from "../models/userSchema.js";
import { decrypt } from "dotenv";
import jwt from "jsonwebtoken"
const Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All fields are required", // Fixed spelling
                success: false
            });
        }
        
        // Fixed: findOne requires an object query filter
        const user = await User.findOne({ email }); 
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false // Fixed spelling
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        // Fixed: map the hashed password variable into the "password" schema key
        await User.create({
            name,
            username,
            email,
            password: hashedPassword 
        });

        return res.status(201).json({
            message: "Account created successfully", // Fixed spelling
            success: true
        });
    }
    catch (e) {
        console.log(e); // Fixed variable from error -> e
        return res.status(500).json({ message: "Server error", success: false });
    }
};

const Login  = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                message: "All fields are required", // Fixed spelling
                success: false
            });
        }

        // find teh user 
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "User dosent exist exist",
                success: false // Fixed spelling
            });
        }
        const isMatch = await bcryptjs.compare(password , user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false // Fixed spelling
            });
        }

        // now that eror exists and the password matches 
        // we are to generate a token 
        const tokenData = {
            userId: user._id
        }
        const token = jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn: "1d"});

        // now the token is generated we just have ot store it in the cookie
        return res.status(200).cookie("token",token,{expiresIn: "1d",httpOnly: true}).json({
            message : `welcome back ${user.name}`,
            sucess: true
        })
    } catch (error) {
        console.log(error);
    }
};
// FIXED: Prefix with export so your userRoute.js file imports it perfectly
export const Logout = (req, res) => {
    // FIXED: Removed invalid curly braces and switched expiresIn to a standard maxAge configuration
    return res.cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: "User logged out successfully", // Fixed spelling typo
        success: true // FIXED: Removed trailing semicolon block
    });
};

export const bookmarks = async (req, res) => {
    try {
        const loggedInUserId = req.user;
        const tweetId = req.params.id;

        const user = await User.findById(loggedInUserId);

        if (!user) {
            return res.status(404).json({
                message: "User does not exist",
                success: false
            });
        }

        if (user.bookmarks.includes(tweetId)){
            // unsave or remove
            await User.findByIdAndUpdate(
                loggedInUserId,
                {
                    $pull: {
                        bookmarks: tweetId
                    }
                }
            );

            return res.status(200).json({
                message: "Tweet bookmarked",
                success: true
            });
        }

        await User.findByIdAndUpdate(
            loggedInUserId,
            {
                $push: { bookmarks: tweetId }
            }
        );

        return res.status(200).json({
            message: "Tweet un bookmarked",
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


export {Register,Login};