function Movie(props) {
    return (
        <div>
            <img src={ props.poster_path } className="movie-poster" alt=""/>
            <h1>{ props.title }</h1>
            <h3>{ props.release_date }</h3>
            <h3>{ props.overview }</h3>
        </div>
    )
}

export default Movie