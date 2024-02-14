import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='search-container'>
      <input className='search-input' onChange={handleSearch} type="text" placeholder='Find your dog breed..' />
    </div>
  )
}

export default Search
