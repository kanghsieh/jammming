import './TrackList.css';

function TrackList(props) {
  return (
    <div className="TrackList">
      {/* add a map method that renders a set of Track components */}
      <ul>
        {props.tracks.map((track) => <li key={track.id}>{track.name} | {track.artist} | {track.album}</li>)}
      </ul>
    </div>
  );
}

export default TrackList;
