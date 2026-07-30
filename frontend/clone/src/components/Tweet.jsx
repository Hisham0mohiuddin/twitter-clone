import React from 'react'
import Avatar from 'react-avatar'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TWEET_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { getRefresh } from '../redux/tweetSlice';
import { FaRegTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";






const Tweet = ({tweet}) => {
//   const {user} = useSelector(store=>store.user);
//   if(!user) return <div className = "text-center text-2xl font-bold border-b border-gray-200 pb-2"> Loading...</div>
    
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.user);

    dayjs.extend(relativeTime);

    
    const likeOrDislikeHandler= async (tweetId) => {
        try {
            const res = await axios.put(
                `${TWEET_API_END_POINT}/like/${tweetId}`,
                {}, // request body
                {
                    withCredentials: true
                }
            );
            dispatch(getRefresh());
            if(res.data.success){
                
                toast.success(res.data.message)
            }
        } catch (error) {
            console.error();
            
        }
    }   
    const deleteTweetHandler = async (id) => {
        try {
            const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`,{withCredentials:true});
            dispatch(getRefresh());
            if(res.data.success){
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error();
            console.log(error.response?.data);
            
        }
    } 

    return (
    <div className = "p-3 border-b border-gray-200">
        <div>
            <div className = "flex w-full">
                {/* the profile avatar*/}
                <Avatar googleId="118096717852922241760" size="40" round={true} />
                <div className= "flex-col ml-2 w-full pr-3 ">
                    {/* the profile section  */}
                    <div className = "flex items-center ">
                        <h1 className = "font-bold">{tweet?.userDetails?.[0]?.name}</h1>
                        <p className = "text-gray-500 text-sm ml-1"> @{tweet?.userDetails?.[0]?.username}. {dayjs(tweet.createdAt).fromNow()}</p>
                    </div>
                    {/* making the tweet text section  */}
                    <div>
                        <p> {tweet?.description} </p>
                    </div>
                    {/* makign the likes save and share section */}
                    <div className = "flex justify-between gap-x-1.5">
                        <div className = "flex items-center">
                            
                            <div onClick = {()=>likeOrDislikeHandler(tweet?._id)} className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                                <AiOutlineLike size= "20px"/>
                            </div>
                            <p>{tweet?.like?.length}</p>
                        </div>
                        <div className = "flex items-center">
                            <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                                <FaRegCommentAlt size= "20px"/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className = "flex items-center">
                            <div className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                                <CiBookmark size= "20px"/>
                            </div>
                            <p>0</p>
                        </div>
                        {
                            user?._id===tweet?.userId &&(
                            <div className = "flex items-center">
                                <div onClick= {()=>deleteTweetHandler(tweet?._id)} className="p-2 hover:bg-blue-200 rounded-full cursor-pointer">
                                    <FaRegTrashAlt size= "20px"/>
                                </div>
                                
                            </div>
                            )
                        }
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Tweet