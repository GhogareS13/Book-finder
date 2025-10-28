import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, loading, error }) => {
  
  // 1. Loading State
  if (loading) {
    return (
      <p style={{ textAlign: 'center', fontSize: '1.5rem', padding: '50px' }}>
        Loading books... 📖
      </p>
    );
  }

  // 2. Error/No Results Handling
  if (error) {
    return (
      <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2rem', padding: '30px', margin: '20px auto', border: '1px solid #f00', maxWidth: '500px' }}>
        {error}
      </p>
    );
  }

  // 3. Initial Empty State
  if (books.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', padding: '50px' }}>
        Search for a book by Title, Author, or ISBN to begin!
      </p>
    );
  }

  // 4. Results Display
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;