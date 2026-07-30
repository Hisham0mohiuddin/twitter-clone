import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import Feed  from "./Feed";
import {Outlet} from 'react-router-dom';
import useGetProfile from "../hooks/useGetProfile.js";
import { useSelector } from "react-redux";
import useOtherUsers from "../hooks/useOtherUsers";
import useGetMyTweets from "../hooks/useGetMyTweets";


const Home = ()=>{
    // whenever at home we need to call the custom hook to 
    // add the other users in some otheruser attribute in our state
    const {users, otherUsers} = useSelector(store=>store.user);
    useOtherUsers();
    useGetMyTweets();
    
    return (
    
        <div className="flex mx-auto w-[90%] mt-1">
            <div className="w-1/5">
                <LeftSidebar />
            </div>

            <div className="w-3/5 border-l border-r border-gray-100">
                <Outlet />
            </div>

            <div className="w-1/5">
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Home;