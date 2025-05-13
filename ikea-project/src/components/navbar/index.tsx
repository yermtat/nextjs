"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { Sidebar } from "@/features/shared/sidebar/sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          className={`flex-col md:flex-row md:flex md:space-x-6 text-sm absolute md:static bg-zinc-900 w-full md:w-auto left-0 px-4 md:px-0 top-14 md:top-0 z-10 transition-all ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/" className="py-2 md:py-0">
            Home
          </Link>
          <Link href="/catalog" className="py-2 md:py-0">
            Catalog
          </Link>
        </nav>

        {/* Phone + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="font-bold whitespace-nowrap">+000000000000</span>
          <div className="relative">
            <button
              className="txt-white p-2"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <LogIn />
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* Cart for mobile */}
      <div className="md:hidden flex items-center justify-between px-4 pb-2">
        <span className="font-bold">+000000000000</span>
        <div className="relative">
          <button className="txt-white p-2">
            <LogIn />
          </button>
        </div>
        <Sidebar />
      </div>
    </header>
  );
}
