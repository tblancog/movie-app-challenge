import { Movie } from '../types/Movie';

export default async function fetchMovies() {
  const resp = await fetch('https://api.themoviedb.org/4/list/1');
  const data = await resp.json();
  console.log(data);
}