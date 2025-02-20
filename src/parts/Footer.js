import { React, useState } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-400 px-4 md:px-16 lg:px-28 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">About us</h2>
          <p className=" text-gray-200">
            Ever heard about W3Schools Spaces? Here you can create your website
            from scratch or use a template, and host it for free.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Link</h2>
          <ul>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              Home
            </li>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              About
            </li>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              Services
            </li>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
          <ul className="flex space-x-4">
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              <FaFacebookSquare className="" />
              <a href="https://www.facebook.com/" target="_blank">
                Facebook
              </a>
            </li>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              <FaTwitterSquare className="" />
              <a href="https://x.com/" target="_blank">
                Twitter
              </a>
            </li>
            <li className=" hover:underline hover:text-sky-950 text-gray-200">
              <FaLinkedin className="" />
              <a href="https://www.linkedin.com/" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t boder-gray-600 text-gray-200 text-center mt-6">
        <p>2025 &copy; Personal Project. Designed by huahieu</p>
      </div>
    </footer>
  );
};

export default Footer;
