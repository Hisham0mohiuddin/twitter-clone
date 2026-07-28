import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import useGetProfile from "../hooks/useGetProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  let {user} = useSelector(store=>store.user);

  useGetProfile(user?._id);
  return (
    <div className="border-x border-gray-200 min-h-screen">
      {/* Top Header */}
      <div className="flex items-center gap-4 p-2 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <Link to="/" className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer transition">
          <IoIosArrowRoundBack size="28px" />
        </Link>
        <div>
          <h1 className="font-bold text-lg leading-tight">Hisham</h1>
          <p className="text-gray-500 text-xs">10 Posts</p>
        </div>
      </div>

      {/* Banner & Avatar Container */}
      <div className="relative">
        {/* Banner Image */}
        <div className="h-48 w-full overflow-hidden bg-gray-200">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg" 
            alt="banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Profile Picture */}
        <div className="absolute -bottom-14 left-4 border-4 border-white rounded-full bg-white">
          <Avatar googleId="118096717852922241760" size="110" round={true} />
        </div>
      </div>

      {/* Action Row (Edit Profile Button) */}
      <div className="flex justify-end p-3 h-16">
        <button className="bg-[#01111c] px-4 py-1.5 text-white font-semibold rounded-full hover:bg-blue-950 border border-gray-300 text-sm transition">
          Edit Profile
        </button>
      </div>

      {/* User Info */}
      <div className="px-4 mt-2">
        <h1 className="font-bold text-xl leading-tight">Hisham</h1>
        <p className="text-gray-500 text-sm">@hishamjuly</p>
      </div>

      {/* Bio */}
      <div className="px-4 mt-3 text-gray-800 text-sm leading-normal">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, doloremque illo provident sed quasi aut facere laboriosam distinctio ea culpa perferendis iure ipsum sit excepturi possimus assumenda quia.
        </p>
      </div>
    </div>
  );
};

export default Profile;