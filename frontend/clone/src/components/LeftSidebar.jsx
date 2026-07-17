import { CiHome ,CiHashtag} from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";



import "../styles/LeftSidebar.css";
import { Link } from "react-router-dom";

export const LeftSidebar = () => {
    return <div>
        <div className="w-[90%]">
            {/* this the calss for the logo of twitter  */}
            <div className="logo">
                <img className="ml-5" width = {"30px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0D8eZ-_N-BdQxVAkaq517NlS5AFgHYhWDyz-ELNaqZQ&s=10" alt="twitter-logo" />
            </div>
            {/* this the class of gogin to the different pages in the leftsidebar */}
            <div className="my-4 ">
                <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <CiHome size = "24px"></CiHome>
                    <h1 className="font-bold text-lg ml-2 ">Home</h1>
                </Link>

                <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <CiHashtag size = "24px"></CiHashtag>
                    <h1 className="font-bold text-lg ml-2 ">Explore</h1>
                </Link>

                <Link to="notification" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <IoIosNotificationsOutline size = "24px"></IoIosNotificationsOutline>
                    <h1 className="font-bold text-lg ml-2 ">Notification</h1>
                </Link>

                <Link to="/profile" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <CiUser size = "24px"></CiUser>
                    <h1 className="font-bold text-lg ml-2 ">Profile</h1>
                </Link>

                <Link to="Favorites" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <CiBookmark size = "24px"></CiBookmark>
                    <h1 className="font-bold text-lg ml-2 ">Favorites</h1>
                </Link>
                
                <Link to="/logout" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full">
                    {/* there sohould be icon and its text  */}
                    <CiLogout size = "24px"></CiLogout>
                    <h1 className="font-bold text-lg ml-2 ">Logout</h1>
                </Link>
                
                <button className = "px-4 py-2  mx-4 border-none text-md bg-[#1098F8] w-full rounded-full text-white font-bold hover:cursor-pointer  hover:bg-[#3a5bde]" >Post</button>

            </div>
        </div>

    </div>;
};