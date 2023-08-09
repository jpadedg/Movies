import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieService from '../../api/MovieService';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie(){
    const { data } = await MovieService.
      getMovieDetails(id)
      setMovie(data);
  } 

  useEffect(() => {
    getMovie()
  }, [])

  useEffect(() => {
    
  })


  return (
    <section className='MovieDetail'>
      <div className='MovieDetail__container'>
        <div className='MovieDetail__col'>
          <h1 className='MovieDetail__title'>{movie.title}</h1>
          <div className='MovieDetail__image'>
            <img 
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
              alt="" 
            />
          </div>
        </div>
        <div className='MovieDetail__col'>
          <div className='MovieDetail__details'>
            <div className='MovieDetail__detail'>
              <span>Budget:  {movie.budget}</span>
            </div>
            <div className='MovieDetail__detail'>
              <span>Original Language: {movie.original_language}</span> 
            </div>
            <div className='MovieDetail__detail'>
              <span>Popularity: {movie.popularity}</span> 
            </div>
            <div className='MovieDetail__detail'>
              <span>Overview: {movie.overview}</span> 
            </div>
          </div>
          <Link to={"/"} className='MovieDetail__button'>
            Voltar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail
