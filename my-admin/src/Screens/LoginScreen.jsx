import React, { useState } from "react";
import backgroundImage from "../assets/2.png";
import logo from "../assets/logo.jpg";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-transparent bg-opacity-70 backdrop-blur-md rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-8 w-full max-w-md bg-transparent">
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2"
          />
          <h2 className="text-2xl font-semibold">Welcome Admin</h2>
          <p className="text-sm text-gray-200">Please log in to your account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="jhon@example.com"
              className="w-full px-4 py-2 rounded bg-transparent border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded bg-transparent border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-white text-sm"
            >
              <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`}></i>
            </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-200">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-white" />
              Remember Me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 rounded transition"
          >
            Sign in
          </button>

          {/* <p className="text-center text-sm text-gray-300 mt-4">
            Don't have an account yet?{" "}
            <a href="#" className="text-white underline">
              Sign up here
            </a>
          </p> */}

          {/* <div className="mt-6 border-t border-white/30 pt-4">
            <p className="text-center text-sm mb-3">OR SIGN IN WITH</p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30"><i className="bx bxl-facebook"></i></button>
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30"><i className="bx bxl-twitter"></i></button>
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30"><i className="bx bxl-google"></i></button>
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30"><i className="bx bxl-linkedin"></i></button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
