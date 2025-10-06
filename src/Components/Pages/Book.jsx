import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <Link
      to={`/book/${book.bookId}`}
      className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5"
    >
      <img
        src={book.image}
        alt={book.bookName}
        className="w-44 h-60 object-contain mx-auto mb-5"
      />

      {/* tags */}
      <div className="flex justify-center gap-2 mb-4">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-center text-gray-900 mb-1">
        {book.bookName}
      </h2>

      <p className="text-center text-gray-600 text-sm mb-3">
        By : <span className="font-medium">{book.author}</span>
      </p>

      <div className="border-t pt-3 flex justify-between items-center text-gray-700 text-sm">
        <span>{book.category}</span>
        <span className="flex items-center gap-1">
          {book.rating.toFixed(2)} <Star size={15} className="text-gray-500" />
        </span>
      </div>
    </Link>
  );
};

export default Book;
