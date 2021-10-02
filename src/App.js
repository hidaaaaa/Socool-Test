import userApi from "api/userApi";
import { getUserInfo } from "commons/useSlice";
import { PrivateRoute, PublicRoute } from "components/CustomRoute";
import AuthFeature from "feature/AuthFeature";
import CommunityFeature from "feature/CommunityFeature";
import ForgotFeature from "feature/ForgotFeature";
import MainFeature from "feature/MainFeature";
import NotFoundFeature from "feature/NotFoundFeature";
import SignInFeature from "feature/SignInFeature";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import SignUpFeature from "./feature/SignUpFeature";

function App() {
	const jwt = useSelector((state) => state.auth.current.jwt);
	// const Web3Api = useMoralisWeb3Api();
	const [isLoading, setIsloading] = useState([true]);
	const dispatch = useDispatch();
	// const { authenticate, isAuthenticated, user, logout } = useMoralis();

	useEffect(() => {
		(async () => {
			try {
				if (!!jwt) {
					if (Object.keys(jwt).length !== 0) {
						const userx = await userApi.getUserInfo();
						if (!!userx) {
							const action = await getUserInfo(userx);
							// console.log("user", user);

							await dispatch(action);
						}
					}
				}
				setIsloading(false);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [jwt]);

	if (isLoading) return <>loading...</>;

	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/u" component={MainFeature} />
				<PrivateRoute
					path="/community/:idCommunity"
					component={CommunityFeature}
				/>
				<PublicRoute path="/" component={AuthFeature} exact />
				<PublicRoute path="/sign-up" component={SignUpFeature} />
				<PublicRoute path="/sign-in" component={SignInFeature} />
				<PublicRoute path="/forgot-password" component={ForgotFeature} />
				<Route path="*" component={NotFoundFeature} />
			</Switch>
		</div>
	);
}

export default App;
