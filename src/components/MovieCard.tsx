import React from 'react'
import { Movie } from '../types/Movie';
interface IProps {
  movie: Movie
}
const MovieCard = ({ movie: { title, overview, poster_path } }: IProps) => {
  const basePath = 'https://image.tmdb.org/t/p/w500/';
  return (
    <li className="card">
      <figure>
        <img src={basePath + poster_path} alt={title} />
      </figure>
      <div className="info">
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </li>
  )
}

export default MovieCard
