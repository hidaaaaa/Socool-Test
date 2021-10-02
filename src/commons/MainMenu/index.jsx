import { Menu } from "antd";
import { mainMenuData } from "assets/images";
import React from "react";
import { Link } from "react-router-dom";

import "./style/index.scss";

const MainMenu = ({ handleOpenDrawler }) => {
	const onOpenDrawler = () => {
		if (handleOpenDrawler) {
			handleOpenDrawler();
		}
	};

	return (
		<Menu defaultSelectedKeys={["0"]} mode="inline" className="mainMenu">
			{mainMenuData.map((item, index) => (
				<Menu.Item key={index}>
					<Link to={`/u${item.url}`} onClick={onOpenDrawler}>
						<div className="mainMenu__item">
							<div className="mainMenu__item--icon">
								<img src={item.icon} alt="" />
							</div>
							<div className="mainMenu__item--title">{item.title}</div>
						</div>
					</Link>
				</Menu.Item>
			))}
		</Menu>
	);
};

export default MainMenu;
