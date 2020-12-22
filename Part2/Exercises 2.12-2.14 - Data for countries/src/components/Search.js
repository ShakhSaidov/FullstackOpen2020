import React from 'react'

const Search = ({search, handleChange}) => {
  return (
    <div>
      Find countries: <input value={search} onChange={handleChange}/>
    </div>
  )
}

export default Search