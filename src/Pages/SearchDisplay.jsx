import React, { useState } from 'react';
import SearchBar from '../../Components/Search/SearchBar' 
// import Header from '../../Componets/Header/Header'

const SearchDisplay = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h2>Search Menu</h2>
      <SearchBar onResults={setResults} />
      
      <div className="search-results">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item._id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>KES {item.price}</span>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchDisplay;
