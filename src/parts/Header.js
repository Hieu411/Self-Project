import React from "react";
import "../input.css";
import { Logo } from "../components/common/Logo";
import Nav from "../components/common/Nav";
const Header = () => {
  return (
    <>
      <header className="bg-indigo-400 top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-8 p-6">
        <Logo />
        <Nav />
      </header>
    </>
  );
};

export default Header;
