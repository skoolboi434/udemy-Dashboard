import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ title }) => {
  return (
    <div className='header-container'>
      <div className='header-title'>
        <span>Primary</span>
        <h2>{title}</h2>
      </div>
      <div className='user-info'>
        <div className='search-box'>
          <FaSearch />
          <input type='text' placeholder='Search...' />
        </div>
        <img src='https://placehold.co/400' alt='' />
      </div>
    </div>
  );
};

export default SearchBar;
