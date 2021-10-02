import CreateCommunityPage from "commons/CreateCommunityPage";
import HomePage from "commons/HomePage";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const HomeContent = () => {
	const { url } = useRouteMatch();

	return (
		<div className="homeContent">
			<Switch>
				<Route component={HomePage} path={`${url}`} exact />
				<Route
					component={CreateCommunityPage}
					path={`${url}/create-community`}
				/>
			</Switch>
		</div>
	);
};

export default HomeContent;
