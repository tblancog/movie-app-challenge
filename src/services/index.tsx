import { Movie } from '../types/Movie';

export default async function fetchMovies(
  handleSetMovies: React.Dispatch<React.SetStateAction<Movie[]>>
) {
  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
  });
  const resp = await fetch('https://api.themoviedb.org/4/list/1', { headers });
  const data = await resp.json();
  handleSetMovies(data.results);
}