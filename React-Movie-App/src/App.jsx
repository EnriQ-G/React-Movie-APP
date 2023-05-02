import './App.css'
import MovieCards from './components/MovieCards'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const APIKEY = import.meta.env.VITE_MB_KEY
  
  const sendSearch = (search) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => {
          //const { data } = results
          console.log(data)
        setMovies(data.results)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
          //const { data } = results
          console.log(data)
          setMovies(data.results)
        }).catch(err => console.log(err))
    }, [])

  return (
    <>
      <h1>React Movie App</h1>
      <SearchBar className='search-input' handleSearch={sendSearch}/>
      <div className='grid-cards'>
          {
            movies.map((movie) => (
              <MovieCards
                key={movie.id} {...movie}
              />
            ))
          }
        </div>
    </>
  )
}

export default App
