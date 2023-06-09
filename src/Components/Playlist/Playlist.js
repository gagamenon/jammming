import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";

import "./Playlist.css";

function Playlist ({ playlistName, playlistTracks, onRemove, onNameChange }) {
	function handleNameChange(event){
		onNameChange(event.target.value);
	}
	function alertTtest() {
		alert(playlistName);
	}
	return(
		<div className="Playlist">
		  <input defaultValue={ playlistName }
		  		 onChange= { handleNameChange } 
				 />
		  <TrackList 	tracks={ playlistTracks }
		  				onRemove={ onRemove }
						isRemoval={true}/>
		  <button className="Playlist-save" onClick={alertTtest}>SAVE TO SPOTIFY</button>
		</div>
	);
};

export default Playlist;