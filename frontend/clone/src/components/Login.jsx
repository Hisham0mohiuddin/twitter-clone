import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { USER_API_END_POINT, TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      let res;

      if (isLogin) {
        res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password
          },
          {
            withCredentials: true
          }
        );
        
      } else {
        res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            username,
            email,
            password
          },
          {
            withCredentials: true
          }
        );
      }
      toast.success(res.data.message);
      if(res.data.success){
        navigate("/")
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen px-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl gap-8">

        {/* Left Side: Big X Logo */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <FaXTwitter size="680px"></FaXTwitter>
        </div>

        {/* Right Side: Authentication Panel */}
        <div className="w-full md:w-[40%] px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8">
            Happening now.
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            {isLogin ? "Login" : "Signup"}
          </h2>

          <form onSubmit={submitHandler} className="flex flex-col max-w-sm">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="outline-blue-500 border border-gray-300 px-3 py-2 rounded-full my-2 text-black placeholder-gray-500"
                />

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value) }}
                  className="outline-blue-500 border border-gray-300 px-3 py-2 rounded-full my-2 text-black placeholder-gray-500"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="outline-blue-500 border border-gray-300 px-3 py-2 rounded-full my-2 text-black placeholder-gray-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="outline-blue-500 border border-gray-300 px-3 py-2 rounded-full my-2 text-black placeholder-gray-500"
            />

            <button
              type="submit"
              className="bg-[#1098F8] hover:bg-blue-500 transition-colors text-white border-none py-2 my-4 rounded-full text-lg font-semibold"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          <p className="max-w-sm mt-4 text-gray-700">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={loginSignupHandler}
              className="text-blue-500 cursor-pointer font-semibold hover:underline"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;