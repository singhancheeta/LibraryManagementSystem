// src/components/BookList.js

import React, { useEffect, useState } from 'react';

const BookList = ({ selectedCategory }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books based on selectedCategory
    // Use fetch or Axios to make API requests
    // Update the books state with the fetched data
  }, [selectedCategory]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
