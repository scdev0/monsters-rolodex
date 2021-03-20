import React from 'react';

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
  );
};
