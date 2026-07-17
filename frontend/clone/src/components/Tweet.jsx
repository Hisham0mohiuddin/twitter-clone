import React from 'react'
import Avatar from 'react-avatar'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
  return (
    <div className = "p-3 border-b border-gray-200">
        <div>
            <div className = "flex w-full">
                {/* the profile avatar*/}
                <Avatar googleId="118096717852922241760" size="40" round={true} />
                <div className= "flex-col ml-2 w-full pr-3 ">
                    {/* the profile section  */}
                    <div className = "flex items-center ">
                        <h1 className = "font-bold">Hisham</h1>
                        <p className = "text-gray-500 text-sm ml-1"> @hisham0Mohiuddin</p>
                    </div>
                    {/* making the tweet text section  */}
                    <div>
                        <p>Hello devleopers welcome to twitter </p>
                    </div>
                    {/* makign the likes save and share section */}
                    <div className = "flex justify-between gap-x-1.5">
                        <div className = "flex items-center">
                            
                            <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                                <AiOutlineLike size= "20px"/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className = "flex items-center">
                            <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
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
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Tweet