import axios from 'axios';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { AiOutlinePicture } from "react-icons/ai";
import { TWEET_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { addTweet, getALLTweets, getIsActive, getRefresh } from "../redux/tweetSlice";

const CreatePost = () => {
    const [description,setDescription] = useState("");
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post(
                `${TWEET_API_END_POINT}/post`,
                { description },
                { withCredentials: true }
            );
    
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(addTweet(res.data.tweet));
                setDescription("");

            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    const forYouHandler = ()=>{
        dispatch(getIsActive(true));
    }
    const followingHandler = ()=>{
        console.log("following clicked")
        dispatch(getIsActive(false));
    }
    
    return (
        <div>
            {/* this is teh following for u selector */}
            <div className = "">
                <div className="flex items-center justify-between border-b border-gray-200">
                    {/* this is for the following / for you selector */}
                    <div onClick = {forYouHandler} className = " flex-1 hover:bg-gray-200 py-3 text-center " >
                        <h1 className = "font-bold text-gray-700 text-lg ">For You</h1>
                    </div>
                    <div onClick = {followingHandler} className = " flex-1 hover:bg-gray-200 py-3 text-center">
                        <h1 className = "font-bold text-gray-700 text-lg cursor-pointer">Following</h1>
                    </div>

                </div>
            </div>
            
            {/* this sithe post maker */}
            <div className = "my-4 mx-1">
                {/* whats happing sectin  */}
                <div className = "flex items-center p-3">
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    
                    <input type="text"  value = {description} onChange = {(e)=> setDescription(e.target.value)} className = "w-full outline-none border-none text-lg ml-2 " placeholder ="what is hapening"/>
                </div>
                {/* the post button and the image  */}
                <div className=" flex items-center justify-between border-b border-gray-300 p-3">
                    <div>
                        <AiOutlinePicture size = "24px"/>
                    </div>
                    <button onClick = {submitHandler} className = "bg-[#1098F8] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2 hover:bg-[#3a5bde]"> Post</button>                </div>

            </div>
        </div>

      
    );
  };
  
  export default CreatePost;