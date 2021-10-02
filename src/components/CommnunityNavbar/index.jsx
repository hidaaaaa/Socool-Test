import { Avatar } from "antd";
import { communityMenu } from "assets/images";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./style/index.scss";

const CommnunityNavbar = ({ community, handleOpenDrawler }) => {
	const { params } = useRouteMatch();

	const onOpenDrawler = () => {
		if (handleOpenDrawler) {
			handleOpenDrawler();
		}
	};

	return (
		<div className="communityNavbar">
			<div className="communityNavbar__content">
				<Avatar
					src={
						!!community.logoUrl
							? `${process.env.REACT_APP_BASE_API}${community.logoUrl?.formats.small.url}`
							: "https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png"
					}
					className="communityNavbar__content--img"
				/>

				<div className="communityNavbar__content--name">Fornite</div>

				<div className="communityNavbar__content--member">
					Members {!!community.totalMember ? community.totalMember : 0}
				</div>
			</div>

			<div className="communityNavbar__menu">
				{communityMenu.map((item, index) => (
					<Link
						className="communityNavbar__menu--item item"
						to={`/community/${params.idCommunity}${item.url}`}
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

export default CommnunityNavbar;
