import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';
const movies = [
  { id: 1, title: 'Thor Ragnarok', overview: '', poster_path: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' },
  { id: 2, title: 'Captain America', overview: '', poster_path: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' },
  { id: 3, title: 'Pulp Fiction', overview: '', poster_path: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg' },
]
function App() {
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
