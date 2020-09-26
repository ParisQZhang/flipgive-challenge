import React from 'react';
import './search-bar.css';

export default function SearchBar ({handleChange}) {
    return (
        <div className='search-bar'>
          <span className='search-bar-name'>Search by Name:</span>
          <input onChange={e=>handleChange(e.target.value)}></input>
        </div>
    )
}