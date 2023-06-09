import React, { useState } from "react";
import './App.css';

import  SearchBar from "../SearchBar/SearchBar";
import  SearchResults from "../SearchResults/SearchResults";
import  Playlist from "../Playlist/Playlist";

function App () {
      const [searchResults, setSearchResults] = useState(
            [{name: 'Song Name 1', artist: 'Artist Fan 1', album: 'Album Name 1', id:1}, 
             {name: 'Song Name 2', artist: 'Artist Fan 2', album: 'Album Name 2', id:2},
             {name: 'Song Name 3', artist: 'Artist Fan 3', album: 'Album Name 3', id:3},
             {name: 'Song Name 4', artist: 'Artist Fan 4', album: 'Album Name 4', id:4},
             {name: 'Song Name 5', artist: 'Artist Fan 5', album: 'Album Name 5', id:5}]
       );
      const [playlistName, setPlaylistName] = useState("My Playlist");
      const [playlistTracks, setPlaylistTracks] = useState([
             {name: 'Play List Name 1', artist: 'Play List Fan 1', album: 'Play List Name 1', id:6},
             {name: 'Play List Name 1', artist: 'Play List Fan 1', album: 'Play List Name 1', id:7},
             {name: 'Play List Name 1', artist: 'Play List Fan 1', album: 'Play List Name 1', id:8}
      ]);
      const addTrack = (track) => {
            let tracks = playlistTracks;
            if (tracks.find(savedTracks => savedTracks.id === track.id)){
                  return;
            } 
            setPlaylistTracks(actualPlaylist => [...actualPlaylist, track])
            
      }
      const removeTrack = (track) => {
            setPlaylistTracks(actualPlaylist => actualPlaylist.filter(currentTrack => currentTrack.id !== track.id));
            
      }
      const updatePlaylistName = (name) => {

            setPlaylistName(name.toString());
      }
      
      return(
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
                <div className="App-playlist">
                    <SearchResults  searchResults={ searchResults } 
                                    onAdd={addTrack} />
                    <Playlist playlistName={ playlistName } 
                              playlistTracks={ playlistTracks } 
                              onRemove={ removeTrack } 
                              onNameChange={ updatePlaylistName }/>
                </div>
            </div>
        </div>
      );
};

export default App;
