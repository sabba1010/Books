

import React, { useEffect, useState } from "react";
import Book from "./Pages/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json") // public folder theke fetch
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center mb-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {allBooks.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
