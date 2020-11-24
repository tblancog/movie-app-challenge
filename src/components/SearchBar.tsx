import React, { useState } from 'react';
import { Movie } from '../types/Movie';
interface IProps {
  items: Array<Movie>,
  handle: Function
};

const SearchBar = ({ items, handle }: IProps) => {
  const [query, setQuery] = useState<string>('');
  return (
    <div>
      <div className="searchContainer">
        <input type="text" placeholder="Enter keywords"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBar
