import './App.css'
import MovieCards from './components/MovieCards'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const API_KEY = import.meta.env.MOVIE_DB

  const sendSearch = (search) => {
      fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&query=${search}`)
        .then(res => res.json())
        .then(results => {
          const { data } = results
          setMovies(data)
        }).catch(err => console.log(err))
    }

  return (
    <>
      <h1>React Movie App</h1>
      <SearchBar className='search-input' onChange={sendSearch}/>
      <div className='grid-cards'>
          {
            movies.map(movie => (
              <MovieCards
                title={movie.title}
                url={movie.poster_path}
                key={movie.id}
              />
            ))
          }
        </div>
    </>
  )
}

export default App
