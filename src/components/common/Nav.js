import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const isActive = ({ isActive }) =>
  isActive
    ? ""
    : "text-white font-extrabol hover:text-sky-950  hover:border-b-2 hover:border-sky-950 font-bold";
const NavLinks_service = () => {
  return (
    <>
      <NavLink to="/about" className={isActive}>
        About
      </NavLink>
      <NavLink to="/blog" className={isActive}>
        Blog
      </NavLink>
      <NavLink to="/project" className={isActive}>
        Project
      </NavLink>
      <NavLink to="/contact" className={isActive}>
        Contact
      </NavLink>
    </>
  );
};

const NavLinks_auth = () => {
  return (
    <>
      <NavLink
        to="/signin"
        className="border text-white font-extrabol hover:text-sky-950  hover:border-b-2 hover:border-sky-950 font-bold"
      >
        Sign in
      </NavLink>
      <NavLink to="/signup" className={isActive}>
        Sign up
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="w-full font-extrabold">
      <div className="justify-between hidden md:flex px-8">
        <div className="flex space-x-6">
          <NavLinks_service />
        </div>
        <div className="flex space-x-6 ml-auto ">
          <NavLinks_auth />
        </div>
      </div>

      <div className="md:hidden flex justify-end">
        <button onClick={toggle}>
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
        {isOpen && (
          <div className="flex flex-col items-center basis-full ">
            <NavLinks_service />
            <NavLinks_auth />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
