import './SearchResults.css';

function SearchResults(props) {
  console.log(props);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <TrackList /> */}
      <ul>
        {props.searchResults.map((result) => <li>{result.name}</li>)}
      </ul>
    </div>
  );
};

export default SearchResults;
