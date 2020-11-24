import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <div>
      MovieList here
      {[1, 2, 3].map(item => (<MovieCard key={item} />))}
    </div>
  )
}

export default MovieList
