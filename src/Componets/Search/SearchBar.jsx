import React, { useEffect, useState } from 'react'

import './SearchBar.css' 
import {FaSearch} from "react-icons/fa";
import axios from 'axios';

export const SearchBar = () => {
   
  return (
    <div className='search' id='search'>
      <FaSearch id='search-icon' />
      <input placeholder="Type to search"  />
    </div>
  )
}

export default SearchBar