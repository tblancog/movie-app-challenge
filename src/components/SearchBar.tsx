import React, { useState } from 'react';
import { Movie } from '../types/Movie';
interface IProps {
  items: Array<Movie>,
  handle: Function
};

const SearchBar = ({ items, handle }: IProps) => {
  const [query, setQuery] = useState<string>('');
  const search = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (query.length > 0) {
      handle(items.filter(item => item.overview.match(
        new RegExp(query, 'ig')
      )));
      setQuery('')
    }
  }
  return (
    <div>
      <div className="searchContainer">
        <input type="text" placeholder="Enter keywords"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={e => search(e)}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar
