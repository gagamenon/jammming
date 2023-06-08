import React from "react";

import "./Track.css";

function Track(){
	function addOrMinus(prop){
		if (prop.isRemoval) {
			return <button className="Track-action">-</button>
		} else {
			return <button className="Track-action">+</button>
		};
	};
	return(
		<div className="Track">
		  <div className="Track-information">
			<h3></h3>
			<p> | </p>
		  </div>
		  <addOrMinus />
		</div>
	);
};

export default Track;