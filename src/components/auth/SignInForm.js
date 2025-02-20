import React from "react";
import backgroundImg from "../../assets/images/background.png";
import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import logo from "@assets/images/logo.svg";
const SignInForm = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full my-8 max-w-md bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
            Sign In
          </h2>
          <p className="text-gray-600 text-center mb-6">
            WELLCOME BACK, I miss you so much. Please sign in to continue using
          </p>
          <form>
            {/* Email Address */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-800 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded"
            >
              Sign In
            </button>
            <div className="abc"></div>
            <div className="abc"></div>
            <div className="container">
              <bg-container>
                <ul role="list">
                  <li className="lists-items">
                    <a href="" className="items"></a>
                  </li>
                  <li className="lists-items">
                    <a href="" className="items"></a>
                  </li>
                  <li className="lists-items">
                    <a href="" className="items"></a>
                  </li>
                  <li className="lists-items">
                    <a href="" className="items"></a>
                  </li>
                  <li className="lists-items">
                    <a href="" className="items"></a>
                  </li>
                </ul>
              </bg-container>
            </div>
            {/* Social Media Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4 underline">Or sign in with</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex justify-center items-center hover:scale-125 ease-in-out duration-300">
                  <FaGoogle />
                </button>

                <button className="w-8 h-8 rounded-full bg-red-600 text-white flex justify-center items-center hover:scale-125 ease-in-out duration-300">
                  <SiGmail />
                </button>
              </div>
            </div>

            <div className="text-center mt-4 text-gray-600">
              <p>
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-indigo-500 hover:underline hover:text-indigo-700 transition-colors"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
