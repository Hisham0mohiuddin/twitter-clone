// this is to check if a twweet is hapening it can only happen if the user exists
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
// to check if we need to give the path here 
const isAuthenticated = async (req,res,next) => {
    try {
        const {token} = res.cookies;
        console.log(token);

        if(!token){
            return res.status(401).json({
                message :"user not authenticated",
                success: false
            })
        }

        // now we need to mathc and chekc if the token is fine 
        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decode);

        req.user = decode.id;

        // this is allwoing it to go forward 
        next();

    } catch (error) {
        console.log(error);
    }
}
export {isAuthenticated};