import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api'
import { Movie } from './components/Movie'


function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading]= useState(false)

  useEffect(
    ()=>{
          setLoading(true)
          api.getMovies().then(res=>setMovies(res.data)).catch(e=>console.warn(e))
          setLoading(false)
    }
  )

  if (!loading&&movies.length>0) {
    return (
      <div className="App">
        {movies.map((movie, index)=>(
          <div key={index}>
            <Movie  movie={movie} index={index}/>
          </div>
        ))}
      </div>       
    ) 
  } else {
    return(
      <p>Carregando...</p>
    )
  }
  

}

export default App
