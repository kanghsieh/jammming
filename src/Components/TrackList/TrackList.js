import './TrackList.css';

function TrackList() {
  const sampleTracks = [
    "Numb",
    "Sky and Sand",
    "Stan"
  ]
  return (
    <div className="TrackList">
      {/* add a map method that renders a set of Track components */}
      <ul>
        {sampleTracks.map((track) => <li>{track}</li>)}
      </ul>
    </div>
  );
}

export default TrackList;
