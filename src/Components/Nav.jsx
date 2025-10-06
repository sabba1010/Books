import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "font-semibold text-black border-b-2 border-black";
  const defaultClass = "text-gray-600 hover:text-black px-3 py-2";

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-black"
          onClick={() => setIsOpen(false)}
        >
          📚 Book Vibe
        </Link>

        {/* Hamburger Menu (mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border md:border-0 shadow-md md:shadow-none rounded-b-md md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
          } md:max-h-full`}
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/listed-books"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          >
            Listed Books
          </NavLink>

          <NavLink
            to="/Wishlist"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          >
            Wishlist
          </NavLink>
        </div>

        {/* Right Side Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm">
            Sign In
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-md text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Sign In/Up */}
      {isOpen && (
        <div className="flex flex-col px-4 pb-4 md:hidden gap-2 border-t border-gray-200">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm">
            Sign In
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-md text-sm">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
