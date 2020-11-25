import React from 'react'

function Search({value, handleChange}) {
    return (
        <div>
            SEARCH: <input value={value} onChange = {handleChange} />
        </div>
    )
}

export default Search
