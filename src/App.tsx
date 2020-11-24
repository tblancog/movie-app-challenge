import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { Movie } from './types/Movie';
import fetchMovies from './services/';
import './App.css';
function App() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  useEffect(() => {
    fetchMovies(setMovies);
  }, []);
  return (
    <div className="container">
      <header>
        <SearchBar />
      </header>
      <main>
        <MovieList items={movies} />
      </main>
    </div>
  );
}

export default App;
