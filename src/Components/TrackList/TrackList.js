import React, { useState } from "react";

import "./TrackList.css";
import Track from "../Track/Track"

function TrackList({ tracks, onAdd }){
	
	return(
		<div className="TrackList">
		{
			tracks.map(track => {
				return <Track track={ track } key={ track.id } onAdd={ onAdd } />;
			})
		}
		</div>
	);
};

export default TrackList;