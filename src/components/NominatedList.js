import React from 'react'

function NominatedList({nominated,handleNominees}) {
    return (
        <>
        <div>
            <h1>Nominated</h1>
             {nominated.length>5? <div>Can't Add any more</div>:(
                 <div>
                 {nominated.map(movie =>{
                     return <div key={movie.imdbID}>
                             <p>{movie.Title}</p>
                             <button onClick={()=>handleNominees(movie)}/>
                          </div>
                          
                          
 
 
                 })}
                 
             </div>
                 
             )}
              
         </div>
        </>
     )
}

export default NominatedList
