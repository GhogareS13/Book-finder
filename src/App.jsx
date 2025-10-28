
import React, { useState } from 'react';
import BookList from './components/BookList'; // import BookList
import SearchBar from './components/SearchBar'; // import SearchBar

function App() {
  const [books, setBooks] = useState([]);      
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);       

  const fetchBooks = async (query, searchType) => {
    setLoading(true);
    setError(null);
    setBooks([]);

    // Open Library API: https://openlibrary.org/search.json?{searchType}={query}
    const url = `https://openlibrary.org/search.json?${searchType}=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.docs && data.docs.length === 0) {
        setError(`No books found for "${query}" by type "${searchType}".`);
      } else {
        const validBooks = data.docs.filter(book => book.title && book.key);
        setBooks(validBooks);
      }

    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to connect to the book database. Please check your network.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = (query, searchType) => {
    fetchBooks(query, searchType);
  };

  return (
    <div style={{ padding: '0px' }}>
      <header style={{ backgroundColor: '#ff0080ff', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>Alex's Book Finder 📚</h1>
      </header>

      <SearchBar onSearch={handleSearch} loading={loading} />

      <div style={{ padding: '0 20px', maxWidth: '900px', margin: '0 auto' }}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}
        {loading && <p style={{ textAlign: 'center' }}>Loading books...</p>}
        
       <BookList books={books} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;