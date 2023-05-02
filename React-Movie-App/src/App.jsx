import './App.css'
import MovieCards from './components/MovieCards'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const APIKEY = import.meta.env.MOVIE_DB

  const sendSearch = (search) => {
      fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(results => {
          const { data } = results
          setMovies(data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`)
        .then(res => res.json())
        .then(results => {
          const { data } = results
          setGifs(data)
        }).catch(err => console.log(err))
    }, [])

  return (
    <>
      <h1>React Movie App</h1>
      <SearchBar className='search-input' handleSearch={sendSearch}/>
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
