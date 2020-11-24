import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { Movie } from './types/Movie';
import fetchMovies from './services/';
import './App.css';
function App() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    fetchMovies(setMovies, setLoading);
  }, []);
  return (
    <div className="container">
      <header>
        <SearchBar items={movies}
          handle={setMovies} />
      </header>
      <main>
        {loading && (<h3>Loading...</h3>)}
        <MovieList items={movies} />
      </main>
    </div>
  );
}

export default App;
