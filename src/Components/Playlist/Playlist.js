import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
  // console.log(props.playlistTracks);
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={props.playlistName} onChange={handleNameChange} />
      {/* <TrackList /> */}
      <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist;
