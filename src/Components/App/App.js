import React from 'react';
// import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
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
    ]}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* -- Add a SearchBar component }
          {/* <SearchBar /> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component -->
            <SearchResults /> */}
            <SearchResults searchResults={this.state.searchResults} />
            {/* <!-- Add a Playlist component -->
            <Playlist /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
