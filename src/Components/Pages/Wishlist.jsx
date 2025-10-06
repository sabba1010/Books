import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // LocalStorage theke wishlist load
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  // Remove book from wishlist
  const removeFromWishlist = (bookId) => {
    const updated = wishlist.filter((b) => b.bookId !== bookId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty</h2>
        <Link
          to="/listed-books"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Wishlist</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {wishlist.map((book) => (
          <div
            key={book.bookId}
            className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.bookName}
              className="w-48 h-64 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {book.bookName}
            </h3>
            <p className="text-sm text-gray-600 mb-2 text-center">
              By: {book.author}
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Star size={16} className="text-yellow-500" />
              <span className="text-sm">{book.rating}</span>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/book/${book.bookId}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                View Details
              </Link>
              <button
                onClick={() => removeFromWishlist(book.bookId)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
