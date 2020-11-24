import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types/Movie';
interface IProps {
  items: Array<Movie>
}
const MovieList = ({ items }: IProps) => {
  return (
    <ul>
      {items.map(item => (<MovieCard key={item.id} movie={item} />))}
    </ul>
  )
}

export default MovieList
