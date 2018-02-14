import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          { name: 'When you were young', duration: 30000 },
          { name: 'Bones', duration: 45000 },
          { name: 'Mr.Brightside', duration: 70000 }
        ]
      },
      {
        name: 'Top of 2017',
        songs: [
          { name: 'Nowhere Man', duration: 55000 },
          { name: 'Yellow Submarine', duration: 34000 },
          { name: 'Rocky Raccoon', duration: 68000 }
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          { name: 'Song for no one', duration: 29000 },
          { name: 'Song for someone', duration: 44000 },
          { name: 'Song of Solomon', duration: 58000 }
        ]
      },
      {
        name: 'Playlist the Fourth',
        songs: [
          { name: 'That one song', duration: 42000 },
          { name: 'The other', duration: 25000 },
          { name: 'The last song', duration: 50000 }
        ]
      }
    ]
  }
};

/* PLAYLISTCOUNTER COMPONENT */
class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

/* HOURSCOUNTER COMPONENT */
class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);

    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);

    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{Math.round(totalDuration / 60 / 60)} hours</h2>
      </div>
    );
  }
}

/* FILTER COMPONENT */
class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

/* PLAYLIST COMPONENT */
class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: 'inline-block', width: '25%' }}>
        <img />
        <h3> Playlist Name </h3>
        <ul>
          <li> Song 1 </li>
          <li> Song 2 </li>
          <li> Song 3 </li>
        </ul>
      </div>
    );
  }
}

/* MAIN COMPONENT */
class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>{this.state.serverData.user.name}'s Playlists</h1>

            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />

            <Filter />

            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h1 style={defaultStyle}>'Loading...'</h1>
        )}
      </div>
    );
  }
}

export default App;
