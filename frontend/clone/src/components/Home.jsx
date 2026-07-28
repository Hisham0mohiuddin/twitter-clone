import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import Feed  from "./Feed";
import {Outlet} from 'react-router-dom';
import useGetProfile from "../hooks/useGetProfile";


const Home = ()=>{
    
    useGetProfile();
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