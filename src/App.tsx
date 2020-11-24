import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <SearchBar />
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
