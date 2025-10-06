import React from "react";
import { useParams, Link } from "react-router-dom";
import bookData from "../../../public/booksData.json";

const BookDetails = () => {
  const { id } = useParams();
  const book = bookData.find((b) => b.bookId === parseInt(id));

  if (!book) {
    return <p className="text-center text-red-500 mt-10">Book not found!</p>;
  }

  return (
    <div className="py-6 pb-8 bg-gray-100">
      {/* Navbar */}
    

      {/* Details Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm mt-10 p-10 grid grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center bg-gray-50 rounded-xl p-6">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-72 h-96 object-contain"
          />
        </div>

        {/* Right Side - Info */}
        <div>
          <h2 className="text-2xl font-bold mb-1">{book.bookName}</h2>
          <p className="text-gray-700 mb-3">By : {book.author}</p>

          <p className="text-gray-800 font-medium mb-2">{book.category}</p>

          <div className="border-t border-gray-200 my-3"></div>

          <p className="text-sm text-gray-700 mb-3">
            <span className="font-semibold">Review :</span>{" "}
            {book.review.slice(0, 280)}...
          </p>

          <div className="mb-4">
            <span className="font-semibold">Tag :</span>{" "}
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mr-2"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <span className="font-semibold">Number of Pages:</span>{" "}
              {book.totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span>{" "}
              {book.publisher}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span>{" "}
              {book.yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {book.rating}
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium">
              Read
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md font-medium">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
