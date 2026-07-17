import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import Feed  from "./Feed";

const Home = ()=>{
    return (
         <div className="flex mx-auto w-[90%]">
            <div className="w-1/5 border border-red-500">
                <LeftSidebar />
            </div>

            <div className="w-3/5 border border-blue-500">
                <Feed />
            </div>

            <div className="w-1/5 border border-green-500">
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Home;