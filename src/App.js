import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

// ^ bring in everything you need for the component, react/data/jsx files

// ===================================================

const App = () => { // the commponent definition
  return (
    <div className="App">
      <h1 className='App-header'>Movie List</h1>
      
      {movieArray.map((movie) => (
        <div className="App">
          <Movie film={ movie } key={movie.id}/>

      {movie.genres.map((genre) => (
          
          <Genre genre={ genre } />
          ))}
          </div>
      ))}
    </div>
  )
};

// ==============================================================

export default App; // making the component AND all of it's defined functionality
// available for everything else