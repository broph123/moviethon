import React from 'react'

function NomineeList({movies, handleNominees}) {
    
    return (
       <>
       <div>
            {!movies ? <div>Loading Nominees...</div>:(
                <div>
                {movies.map(movie =>{
                    return <ui key={movie.imdbID}>
                            <li>{movie.Title}</li>
                            <button onClick={()=>handleNominees(movie)}/>
                           
                         </ui>
                         


                })}
                
            </div>
                
            )}
             
        </div>
       </>
    )
}

export default NomineeList
