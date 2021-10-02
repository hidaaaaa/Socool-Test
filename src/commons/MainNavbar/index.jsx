import MainMenu from "commons/MainMenu";
import UserInfoBox from "components/UserInfoBox";
import React from "react";
import "./style/index.scss";

const MainNavbar = ({ handleOpenDrawler }) => {
	return (
		<div className="mainNavbar">
			<div className="mainNavbar__menu">
				<MainMenu handleOpenDrawler={handleOpenDrawler} />
			</div>
			<div className="mainNavbar__fix"></div>
			<div className="mainNavbar__user">
				<UserInfoBox />
			</div>
		</div>
	);
};

export default MainNavbar;
