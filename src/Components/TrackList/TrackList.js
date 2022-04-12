import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
  return (
    <div className="TrackList">
      {/* add a map method that renders a set of Track components */}
      <ul>
        {props.tracks.map((track) => <li key={track.id}><Track track={track} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval} /></li> )}
      </ul>
    </div>
  );
}

export default TrackList;
