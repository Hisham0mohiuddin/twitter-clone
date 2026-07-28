import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import Feed  from "./Feed";
import {Outlet} from 'react-router-dom';
import useGetProfile from "../hooks/useGetProfile";
import { useSelector } from "react-redux";


const Home = ()=>{
    // to add the id
    // let id ="6a5b76d8587c6aac69e2ea63"; 
    let {id,otheruser} = useSelector(store=>store.user);

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