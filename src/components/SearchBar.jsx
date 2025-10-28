import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title'); // Default to title

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      
      {/* 1. Search Type Dropdown */}
      <select 
        value={searchType} 
        onChange={(e) => setSearchType(e.target.value)}
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        disabled={loading}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="isbn">ISBN</option>
      </select>
      
      {/* 2. Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search by ${searchType}...`}
        style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        disabled={loading}
      />
      
      {/* 3. Search Button */}
      <button 
        type="submit" 
        style={{ 
          padding: '10px 15px', 
          backgroundColor: loading ? '#999' : '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search Books'}
      </button>
    </form>
  );
};

export default SearchBar;