import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <ul>
      {[1, 2, 3].map(item => (<MovieCard key={item} />))}
    </ul>
  )
}

export default MovieList
