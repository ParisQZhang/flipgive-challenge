import React from 'react';
import './search-bar.css';

export default function SearchBar ({handleChange}) {
    return (
        <div>
          Search by Name:
          <input onChange={e=>handleChange(e.target.value)}></input>
        </div>
    )
}