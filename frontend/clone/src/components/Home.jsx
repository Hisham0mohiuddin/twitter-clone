import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import { Feed } from "./Feed";

const Home = ()=>{
    return (
        <div className = "flex justify-between mx-auto w-[80%]">
            <LeftSidebar></LeftSidebar>

            <Feed></Feed>

            <RightSidebar></RightSidebar>
            
        </div>
    )
}

export default Home;