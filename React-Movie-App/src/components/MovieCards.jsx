import React from 'react'
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieCards = ({titel, poster_path, vote_average, release_date, overview}) => {
  return (
    <div className='image-container'>
        <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
        <h3>{titel}</h3>
        <h4>IMDb: {vote_average}</h4>
        <h5>Release Date: {release_date}</h5>
        <br></br>
        <h6>Overview</h6>
        <p>{overview}</p>
    </div>
  )
}

export default MovieCards