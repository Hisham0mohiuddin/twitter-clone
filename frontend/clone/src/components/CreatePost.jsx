import Avatar from 'react-avatar';
import { AiOutlinePicture } from "react-icons/ai";

const CreatePost = () => {
    return (
        <div>
            {/* this is teh following for u selector */}
            <div className = "">
                <div className="flex items-center justify-between border-b border-gray-200">
                    {/* this is for the following / for you selector */}
                    <div className = " flex-1 hover:bg-gray-200 py-3 text-center " >
                        <h1 className = "font-bold text-gray-700 text-lg ">For You</h1>
                    </div>
                    <div className = " flex-1 hover:bg-gray-200 py-3 text-center">
                        <h1 className = "font-bold text-gray-700 text-lg cursor-pointer">Following</h1>
                    </div>

                </div>
            </div>
            
            {/* this sithe post maker */}
            <div className = "my-4 mx-1">
                {/* whats happing sectin  */}
                <div className = "flex items-center p-3">
                    <div>
                        <Avatar googleId="118096717852922241760" size="40" round={true} />
                    </div>
                    
                    <input type="text" className = "w-full outline-none border-none text-lg ml-2" placeholder ="what is hapening"/>
                </div>
                {/* the post button and the image  */}
                <div className=" flex items-center justify-between border-b border-gray-300 p-3">
                    <div>
                        <AiOutlinePicture size = "24px"/>
                    </div>
                    <button className = "bg-[#1098F8] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2"> Post</button>                </div>

            </div>
        </div>

      
    );
  };
  
  export default CreatePost;