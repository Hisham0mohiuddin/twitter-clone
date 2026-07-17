import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

export const RightSidebar = () => {
    return <div className = "">
        <div className = "w-[90%] mx-auto">
            <div>
                {/* the serach bar  */}
                <div className = "flex items-center px-2 py-1 bg-gray-100 rounded-full outline-none">
                    <CiSearch size = "20px"></CiSearch>
                    <input type="text" name="search" id="search" className = "p=2" placeholder="Search" />
                </div>

                {/* the follow suggestions*/}
                <div className  = "  my-4 p-4 bg-gray-100 rounded-2xl">
                    {/* the who to follow scene */}
                    <div>
                        <h1 className = "font-bold text-2xl">Who to follow ?</h1>
                    </div>
                    {/* the suggestio wich each has a avatar their name and a follow button*/}
                    <div className = "flex justify-between py-2">
                        {/* the avatar and name  */}
                        <div className = "flex items-center  justify-baseline">
                            <div >
                                <Avatar googleId="118096717852922241760" size="40" round={true} />
                            </div>
                            <div className = "ml-1">
                                <h2 className = "text-1xl font-bold">Ammar</h2>
                                <p className = "text-sm">@ammar</p>
                            </div>
                        </div>
                        {/* the follow button  */}
                        <div>
                        <button className = "bg-[#01111c] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2 hover:bg-blue-950"> Follow</button>
                        </div>
                    </div>
                    <div className = "flex justify-between py-2">
                        {/* the avatar and name  */}
                        <div className = "flex items-center  justify-baseline">
                            <div >
                                <Avatar googleId="118096717852922241760" size="40" round={true} />
                            </div>
                            <div className = "ml-1">
                                <h2 className = "text-1xl font-bold">Ammar</h2>
                                <p className = "text-sm">@ammar</p>
                            </div>
                        </div>
                        {/* the follow button  */}
                        <div>
                        <button className = "bg-[#01111c] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2 hover:bg-blue-950"> Follow</button>
                        </div>
                    </div>
                    <div className = "flex justify-between py-2">
                        {/* the avatar and name  */}
                        <div className = "flex items-center  justify-baseline">
                            <div >
                                <Avatar googleId="118096717852922241760" size="40" round={true} />
                            </div>
                            <div className = "ml-1">
                                <h2 className = "text-1xl font-bold">Ammar</h2>
                                <p className = "text-sm">@ammar</p>
                            </div>
                        </div>
                        {/* the follow button  */}
                        <div>
                        <button className = "bg-[#01111c] px-4 py-3 text-white font-semibold text-center border-none rounded-full p-2 hover:bg-blue-950"> Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};