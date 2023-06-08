import React, { useState } from "react";

import "./Track.css";

function Track({track}, key){
	return(
		<div className="Track">
		  <div className="Track-information">
			<h3>{ track.name }</h3>
			<p>{ track.artist } | { track.album }</p>
		  </div>
		  <button className="Track-action">{track.isRemoval ? "-" : "+"}</button>
		</div>
	);
};

export default Track;