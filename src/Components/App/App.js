import React from 'react';
// import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Numb",
          artist: "Linkin Park",
          album: "Meteora",
          id: 1
        },
        {
          name: "Sky and Sand",
          artist: "Paul Kalkbrenner",
          album: "Berlin Calling",
          id: 2
        },
        {
          name: "Slim Shady",
          artist: "Eminem",
          album: "Slim Shady",
          id: 3
        }
      ],
      playlist: {
        playlistName: "Favorites",
        playlistTracks: [
          {
            name: "Ich Will",
            artist: "Rammstein",
            album: "Mutter",
            id: 4
          },
          {
            name: "Visitor",
            artist: "Of Monsters and Men",
            album: "Visitor",
            id: 5
          }
        ]
      }
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    // Use the track’s id property to check if the current song is in the playlistTracks state.
    // console.log(this.state.playlist.playlistTracks);
    this.setState((prevState) => {
      let copiedState = Object.assign({}, prevState);
      console.log(copiedState);
      if (!this.state.playlist.playlistTracks.some((element) => element.id === track.id)) {
        copiedState.playlist.playlistTracks.push(track);
        return copiedState;
      } else {
        return copiedState;
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* -- Add a SearchBar component }
          {/* <SearchBar /> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component -->*/}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={this.state.playlist.playlistName} playlistTracks={this.state.playlist.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
