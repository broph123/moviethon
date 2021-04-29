import axios from 'axios'
import React, {useState} from 'react'

function SearchNominees() {
    const [search,setSearch] = useState("")
    const [results, setResults] = useState([])

    const onChange = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)

        axios
        .get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
            if(!res.Errors){
                setResults(res.data.Search)
            }else{
                setResults([])
                
            }
            })


        .catch(err=>console.log(err.response))

    }

   
    return (
        <>
        <div>
            <input type="text" placeholder="Browse Nominees" value={search} onChange={onChange}/>
            {!results ? <div>Loading...</div>:(
                <div>
                {results.map(movie =>{
                    return <ui key={movie}>
                            <li>{movie.Title}</li>
                            <button>nominated</button>
                         </ui>


                })}
                
            </div>
                
            )}
             
        </div>
        <div>
        
        </div>
        </>
    )
}

export default SearchNominees
