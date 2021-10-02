import React from "react";
import { Link } from "react-router-dom";

const NotFoundFeature = () => {
	return (
		<div>
			Page not found
			<Link to="/u">Back</Link>
		</div>
	);
};

export default NotFoundFeature;
