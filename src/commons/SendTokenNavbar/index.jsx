import { sendTokenMenu } from "assets/images";
import React from "react";
import { Link } from "react-router-dom";

const SendTokenNavbar = ({ balance, handleOpenDrawler }) => {
	const onOpenDrawler = () => {
		if (handleOpenDrawler) {
			handleOpenDrawler();
		}
	};

	return (
		<div className="communityNavbar">
			<div className="communityNavbar__menu">
				{sendTokenMenu.map((item, index) => (
					<Link
						className="communityNavbar__menu--item item"
						to={`/send-token${item.url}`}
						key={index}
						onClick={onOpenDrawler}
					>
						<div className="item__icon">
							<img src={item.icon} alt="" />
						</div>
						<div className="item__title">{item.title}</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SendTokenNavbar;
