import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import Feed  from "./Feed";
import {Outlet} from 'react-router-dom';
import useGetProfile from "../hooks/useGetProfile";


const Home = ()=>{
    // to add the id
    let id ="6a665f5a3c55266d9df9861e"; 
    useGetProfile(id);
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