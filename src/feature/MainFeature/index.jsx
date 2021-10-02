import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import HomeContent from "commons/HomeContent";
import MainNavbar from "commons/MainNavbar";
import { PrivateRoute } from "components/CustomRoute";
import useWindowSize from "customHook/useWindowSize";
import React, { useState } from "react";
import { Redirect, Switch, useRouteMatch } from "react-router";
import "./style/index.scss";

const MainFeature = () => {
	const { url } = useRouteMatch();
	const [visible, setVisible] = useState(false);
	const { width } = useWindowSize();

	const handleOpenDrawler = () => {
		setVisible(false);
	};

	const onCloseDrawer = () => {};

	return (
		<div className="main">
			{width > 768 ? (
				<div className="main__navbar">
					<MainNavbar />
				</div>
			) : (
				<Drawer
					placement={"left"}
					closable={false}
					onClose={onCloseDrawer}
					visible={visible}
					key={"left"}
				>
					<div className="main__navbar">
						<MainNavbar handleOpenDrawler={handleOpenDrawler} />
					</div>
				</Drawer>
			)}

			<div className="main__content">
				{width <= 768 && (
					<div className="main__content--back" onClick={() => setVisible(true)}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</div>
				)}
				<Switch>
					<Redirect from="/u" to={`${url}/home`} exact />
					<PrivateRoute component={HomeContent} path={`${url}/home`} />
				</Switch>
			</div>
		</div>
	);
};

export default MainFeature;
