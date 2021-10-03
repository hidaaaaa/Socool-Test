import { Drawer } from "antd";
import BalancePage from "commons/BalancePage";
import SendPage from "commons/SendPage";
import SendTokenNavbar from "commons/SendTokenNavbar";
import CommunityHeader from "components/CommunityHeader";
import useWindowSize from "customHook/useWindowSize";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import "./style/index.scss";

const SendTokenFeature = () => {
	const { url } = useRouteMatch();
	const { width } = useWindowSize();
	const [visibleNavbar, setVisibleNavbar] = useState(false);
	const { isAuthenticated } = useMoralis();

	if (!isAuthenticated) {
		return (
			<div className="sendToken">
				<div className="sendToken__header">
					<CommunityHeader />
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Please connect to metamask and try again{" "}
				</div>
			</div>
		);
	}

	return (
		<div className="sendToken">
			<div className="sendToken__header">
				<CommunityHeader />
			</div>
			<div className="sendToken__body">
				{width > 768 ? (
					<div className="sendToken__body--navbar">
						<SendTokenNavbar />
					</div>
				) : (
					<Drawer
						placement={"left"}
						closable={false}
						// onClose={onCloseDrawer}
						visible={visibleNavbar}
						key={"left"}
					>
						<div className="sendToken__body--navbar">
							<SendTokenNavbar />
						</div>
					</Drawer>
				)}

				<div className="sendToken__body--content">
					<Switch>
						<Redirect from={url} to={`${url}/balance`} exact />
						<Route path={`${url}/balance`}>
							<BalancePage />
						</Route>
						<Route path={`${url}/send`}>
							<SendPage />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default SendTokenFeature;
