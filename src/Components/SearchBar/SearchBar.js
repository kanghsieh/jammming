import { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState(props.onSearch);

  // const search = (query) => {
  //   props.onSearch = term;
  // }

  const handleTermChange = (event) => {
    console.log(event.target.value);
    setTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar;
