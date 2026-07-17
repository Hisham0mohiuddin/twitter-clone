import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
const Profile = () => {
  return (
    <div>
        {/* the banner */}
        <div>
            {/* the person name and no of posts */}
            <div className = "flex">
                <Link to="/" className  = "p-2 rounded-full bg-gray-100 hover:bg-gray-400 hover:cursor-pointer">
                    <IoIosArrowRoundBack size = "32px"></IoIosArrowRoundBack>
                </Link>
                <div className ="ml-1">
                    <h1 className = "font-bold text-lg">Hisham</h1>
                    <p className = "text-grey-500 text-sm">10 Posts</p>
                </div>
            </div>
            {/* the offcenter profile pick */}
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg" alt="banner" />
            <div className="absolute top-59 ml-4 border-4 border-white rounded-full">
                <Avatar googleId="118096717852922241760" size="120" round={true} />
            </div>

            {/* the profile edit button */}
            <div className= "text-right m-2">
                <button className = "bg-[#01111c] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2 hover:bg-blue-950"> Edit Profile</button>
            </div>
            {/* the guys name and profile */}
            <div className= "m-2">
                    
                <h1 className = "font-bold text-xl">Hisham</h1>
                <p className = "text-grey-500 text-sm">@hishamjuly</p>
            </div>
            {/* the bio */}
            <div className= "m-2 ">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, doloremque illo provident sed quasi aut facere laboriosam distinctio ea culpa perferendis iure ipsum sit excepturi possimus assumenda quia. Sequi, quae!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum magnam accusamus tenetur rerum quos expedita ipsa illum sequi hic quaerat, sit, porro eos adipisci? Asperiores voluptatibus unde omnis dolore inventore.

                </p>
            </div>
            
        </div>

    </div>
  )
}

export default Profile