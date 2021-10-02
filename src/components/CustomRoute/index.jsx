import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
	const token = localStorage.getItem("access_token");
	return (
		<Route
			{...rest}
			render={(props) => {
				return !!token ? <Component {...props} /> : <Redirect to="/" />;
			}}
		/>
	);
}

function PublicRoute({ component: Component, ...rest }) {
	const token = localStorage.getItem("access_token");
	return (
		<Route
			{...rest}
			render={(props) => {
				return !!token ? <Redirect to="/u" /> : <Component {...props} />;
			}}
		/>
	);
}

export { PrivateRoute, PublicRoute };
