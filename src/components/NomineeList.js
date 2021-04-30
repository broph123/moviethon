import React from 'react'
import {Button,CircularProgress} from '@material-ui/core'

function NomineeList({movies, handleNominees, nominate}) {
    
    return (
       <>
       <div>
       <h1>Nominees</h1>
            {!movies ?
             <div>
                 <h2>And the Shoppies goes too!</h2>
                 <CircularProgress/> 
             </div>
             :(
                <div>
                    
                {movies.map(movie =>{
                    return <div className="nominees" key={movie.imdbID}>
                            <p>{movie.Title}</p>
                            <Button onClick={()=>handleNominees(movie)}> Nominate </Button>
                            
                           
                         </div>
                         


                })}
                
            </div>
                
            )}
             
        </div>
       </>
    )
}

export default NomineeList
