import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  console.log(props);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <TrackList /> */}
      <TrackList tracks={props.searchResults} />
    </div>
  );
};

export default SearchResults;
