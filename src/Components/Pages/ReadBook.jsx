import React from "react";
import { useParams, Link } from "react-router-dom";
import bookData from "../../../public/booksData.json";

const ReadBook = () => {
  const { id } = useParams();
  const book = bookData.find((b) => b.bookId === parseInt(id));

  if (!book) {
    return <p className="text-center text-red-500 mt-10">Book not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Book Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-32 h-44 object-contain rounded-md"
          />
          <div>
            <h1 className="text-2xl font-bold">{book.bookName}</h1>
            <p className="text-gray-600">By: {book.author}</p>
            <p className="text-gray-500 text-sm mt-1">
              Category: {book.category} | Pages: {book.totalPages} | Year:{" "}
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Book Content */}
        <div className="text-gray-800 text-justify space-y-4">
          {book.content ? (
            book.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))
          ) : (
            <p>{book.review}</p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to={`/book/${book.bookId}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Back to Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
