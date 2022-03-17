// ============== things I want to import for use



// ============== definition of my component
function Movie(props) {
    return (
        <div>
            <img src={ props.film.poster_path } className="movie-poster" alt=""/>
            <h1>{ props.film.title }</h1>
            <h3>{ props.film.release_date }</h3>
            <h3>{ props.film.overview }</h3>
        </div>
    )
}

//================== export the component

export default Movie