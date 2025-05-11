"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-col md:flex-row md:flex md:space-x-6 text-sm absolute md:static bg-zinc-900 w-full md:w-auto left-0 px-4 md:px-0 top-14 md:top-0 z-10 transition-all ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/about" className="py-2 md:py-0">
            About Us
          </Link>
          <Link href="/catalog" className="py-2 md:py-0">
            Catalog
          </Link>
          <Link href="/offers" className="py-2 md:py-0">
            Promotions
          </Link>
          <Link href="/reviews" className="py-2 md:py-0">
            Reviews
          </Link>
          <Link href="/buyers" className="py-2 md:py-0">
            For Buyers
          </Link>
          <Link href="/contacts" className="py-2 md:py-0">
            Contacts
          </Link>
        </nav>

        {/* Phone + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="font-bold whitespace-nowrap">+7 (4872) 710-150</span>
          <div className="relative">
            <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
              🛍️
            </button>
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Cart for mobile */}
      <div className="md:hidden flex items-center justify-between px-4 pb-2">
        <span className="font-bold">+7 (4872) 710-150</span>
        <div className="relative">
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
            🛍️
          </button>
          <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
