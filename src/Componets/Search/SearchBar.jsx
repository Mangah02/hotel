
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import './SearchBar.css';

export const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');

  // Function to call backend API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await axios.get(`http://localhost:4000/api/search?q=${query}`); 
      onResults(res.data); // Pass results to parent component
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <form className="search" id="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Type to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Make search icon act like a button */}
      <button type="submit" className="search-btn">
        <FaSearch id="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
