"use client";

import { Sidebar } from "@/app/features/shared/sidebar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="bg-black py-4 flex items-center justify-between px-6 md:px-12 lg:px-20">
        <div className="flex items-center space-x-2">
          <span className="text-orange-400 font-bold text-xl">pizzashop</span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-orange-400 focus:outline-none text-2xl"
        >
          ☰
        </button>

        <nav
          className={`absolute top-full left-0 w-full md:w-auto md:static bg-black md:bg-transparent p-4 md:p-0 md:flex md:space-x-6 text-white transition-all duration-300 ${
            isMenuOpen ? "flex flex-col items-center" : "hidden"
          }`}
        >
          <a href="#" className="hover:text-orange-300 m-5 pr-5 pl-5">
            Home
          </a>
          <a href="#" className="hover:text-orange-300 m-5 pr-5 pl-5">
            Menu
          </a>
          <a href="#" className="hover:text-orange-300 m-5 pr-5 pl-5">
            Events
          </a>
          <a href="#" className="hover:text-orange-300 m-5 pr-5 pl-5">
            About us
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gradient-to-r from-orange-300 to-orange-600 text-white px-4 py-2 rounded-full">
            <span className="mr-10 ml-10">Log in</span>
          </button>

          <Sidebar />
        </div>
      </header>
    </div>
  );
};

export default Header;
