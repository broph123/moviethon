
import React from 'react'

function SearchNominees({search,setSearch}) {
    return (
        <div className='col col-sm-2'>
            <input
            type="text"
            placeholder="Browse Nominees"
            onChange = {(e)=>setSearch(e.target.value)}
            
            >

            </input>
            
        </div>
    )
}

export default SearchNominees
