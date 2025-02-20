//file này là form đăng ký
import React from "react";
import backgroundImg from "../../assets/images/background.png";

import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SignUpForm = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex justify-center items-center "
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className=" w-full my-8 max-w-md bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
            Sign Up
          </h2>
          <p className="text-gray-600 text-center mb-6">
            WELLCOME TO OUR WEBSITE, Please sign up to continue using
          </p>
          <form>
            {/* Full Name */}
            <div className="mb-6">
              <label
                htmlFor="full-name"
                className="block text-gray-800 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

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

            {/* Phone Number */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-800 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-6">
              <label
                htmlFor="dob"
                className="block text-gray-800 font-semibold"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold">
                Gender
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
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

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-gray-800 font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="inline-flex items-center text-gray-800">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-500"
                />
                <span className="ml-2">
                  I agree to the{" "}
                  <a
                    href="/termsandconditions"
                    className="text-indigo-500   hover:underline hover:text-indigo-700  transition-colors "
                  >
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded"
            >
              Sign Up
            </button>

            {/* Social Media Signup */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4 underline">Or sign up with</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex justify-center items-center  hover:scale-125 ease-in-out duration-300">
                  <FaGoogle />
                </button>
                <button className="w-8 h-8 rounded-full bg-red-600 text-white flex justify-center items-center hover:scale-125 ease-in-out duration-300">
                  <SiGmail />
                </button>
              </div>
            </div>

            <div className="text-center mt-4 text-gray-600">
              <p>
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="text-indigo-500   hover:underline hover:text-indigo-700  transition-colors"
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
