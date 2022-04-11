import './TrackList.css';

function TrackList(props) {
  // const sampleTracks = [
  //   "Numb",
  //   "Sky and Sand",
  //   "Slim Shady"
  // ]

  return (
    <div className="TrackList">
      {/* add a map method that renders a set of Track components */}
      {/* <ul>
        {sampleTracks.map((track) => <li>{track}</li>)}
      </ul> */}
      <ul>
        {props.searchResults.map((result) => <li>{result.name}</li>)}
      </ul>
    </div>
  );
}

export default TrackList;
