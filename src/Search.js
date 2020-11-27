import React from 'react'

function Search({value, handleChange}) {
    return (
        <div>
            
        <label htmlFor="movie__Search">SEARCH:</label>
        <input id="movie__Search" value={value} onChange={handleChange}  />
      </div>
    );
}

export default Search
