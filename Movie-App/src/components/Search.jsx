import React from 'react'

const Search = ({searchTerm,setSearchterm}) => {
  return (
    <div className='search' >
      <div >
        <img className='mt-[40px]' src='search.png' alt='Search'/>
      </div>

      <input type='text'
        placeholder='Search through thousands of Movies'
        value={searchTerm}
        onChange={(e)=>{
          setSearchterm(e.target.value)
        }}
      />
    </div>
  )
}

export default Search
