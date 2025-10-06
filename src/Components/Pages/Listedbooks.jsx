import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const data = useLoaderData();
  const books = Array.isArray(data) ? data : data.books || [];

  return (
    <div className="container mx-auto px-4 md:px-16 py-10">
      <h2 className="text-2xl font-semibold text-center mb-8">Books</h2>

      <div className="flex flex-col gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow-sm"
          >
            <img
              src={book.image}
              alt={book.bookName}
              className="w-32 h-44 object-cover rounded-md"
            />

            <div className="flex-1 md:ml-6 text-center md:text-left">
              <h3 className="text-lg font-semibold">{book.bookName}</h3>
              <p className="text-sm text-gray-600 mb-2">By: {book.author}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                {book.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-500">
                <p>📘 Publisher: {book.publisher}</p>
                <p>📄 Page: {book.totalPages}</p>
                <p>📅 Year: {book.yearOfPublishing}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mt-3 md:mt-0">
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md">
                Category: {book.category}
              </span>
              <span className="text-sm bg-yellow-100 text-yellow-600 px-3 py-1 rounded-md">
                Rating: {book.rating}
              </span>

              <Link
                to={`/book/${book.bookId}`}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
