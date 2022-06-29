import './Movie.css'

export function Movie({movie, index}){
    return (
        <>
            <img src={movie.avatar} alt={`Capa do filme ${movie.titulo}`} /> 
            <p>{movie.titulo}</p>
        </>
    )
}