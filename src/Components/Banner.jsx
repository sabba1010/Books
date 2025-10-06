import React from 'react';
import book from '../assets/books.png';

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-2xl px-16 py-20 max-w-6xl mx-auto my-16 shadow-sm">
      {/* Left Side */}
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-snug">
          Books to freshen up <br /> your bookshelf
        </h1>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
          View The List
        </button>
      </div>

      {/* Right Side */}
      <div className="w-1/3">
        <img
          className="w-full drop-shadow-xl hover:scale-105 transition-transform duration-500"
          src={book}
          alt="Book cover"
        />
      </div>
      
    </div>
  );
};

export default Banner;
