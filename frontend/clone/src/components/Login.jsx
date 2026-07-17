import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-[420px] p-8 border border-gray-200 rounded-2xl shadow-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <FaXTwitter size={50} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Sign in to X
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md p-3 mb-6 outline-none focus:border-blue-500"
        />

        {/* Login Button */}
        <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-900 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-1" />
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;