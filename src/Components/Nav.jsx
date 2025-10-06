import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black font-semibold border-b-2 border-black pb-1"
      : "text-gray-600 hover:text-black";

  return (
    <div className="flex justify-between items-center px-16 py-6 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        Book Vibe
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/listed-books" className={linkClass}>
          Listed Books
        </NavLink>
        <NavLink to="/pages-to-read" className={linkClass}>
          Pages to Read
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm">
          Sign In
        </button>
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-md text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
