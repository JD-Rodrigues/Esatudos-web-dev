import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api'
import { Movie } from './components/Movie'


function App() {

  const [movies, setMovies] = useState([])

  useEffect(
     ()=>{
        api.getMovies().then(json=>setMovies(json))
    },[]
  )

  return (
    <div className="App">
      {movies.map((movie, index)=>(
        <div key={index}>
          <Movie  movie={movie} index={index}/>
        </div>
      ))}
    </div>       
  )

}

export default App
