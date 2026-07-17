import React from 'react'
import Avatar from 'react-avatar'
const Tweet = () => {
  return (
    <div className = "p-3">
        <div>
            <div className = "flex ">
                {/* the profile avatar*/}
                <Avatar googleId="118096717852922241760" size="40" round={true} />
                <div className= "flex-col ml-2">
                    {/* the profile section  */}
                    <div className = "flex items-center ">
                        <h1 className = "font-bold">Hisham</h1>
                        <p className = "text-gray-500 text-sm ml-1"> @hisham0Mohiuddin</p>
                    </div>
                    {/* making the tweet text section  */}
                    <div>
                        <p>Hello devleopers welcome to twitter </p>
                    </div>
                    {/* makign the likes save and share section */}
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Tweet