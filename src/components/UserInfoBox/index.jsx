import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Popover } from "antd";
import { logout as lg } from "commons/useSlice";
import React from "react";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/index.scss";

const UserInfoBox = () => {
	const userx = useSelector((state) => state.auth.current.user);
	const dispatch = useDispatch();
	const { isAuthenticated, authenticate, user } = useMoralis();

	const handleSignOut = async () => {
		const action = lg();
		await dispatch(action);
	};
	const handleConnect = () => {
		authenticate();
	};

	return (
		<Popover
			content={
				<div className="popover">
					{isAuthenticated ? (
						<div className="popover__item" onClick={handleConnect}>
							<div className="popover__item--icon">
								<FontAwesomeIcon icon={faConnectdevelop} />
							</div>
							<div className="popover__item--title">{user.get("username")}</div>
						</div>
					) : (
						<div className="popover__item" onClick={handleConnect}>
							<div className="popover__item--icon">
								<FontAwesomeIcon icon={faConnectdevelop} />
							</div>
							<div className="popover__item--title">Connect</div>
						</div>
					)}

					<Link to="/profile">
						<div className="popover__item">
							<div className="popover__item--icon">
								<FontAwesomeIcon icon={faUser} />
							</div>
							<div className="popover__item--title">View Profile Page</div>
						</div>
					</Link>

					<Link to="/create-event">
						<div className="popover__item">
							<div className="popover__item--icon">
								<FontAwesomeIcon icon={faVideo} />
							</div>
							<div className="popover__item--title">Create New Event</div>
						</div>
					</Link>

					<div className="popover__item" onClick={handleSignOut}>
						<div className="popover__item--icon">
							<FontAwesomeIcon icon={faSignOutAlt} />
						</div>
						<div className="popover__item--title">Sign Out</div>
					</div>
				</div>
			}
		>
			<div className="userInfoBox">
				{/* <div className="userInfoBox__img"> */}
				<Avatar
					src="https://i0.wp.com/i.imgur.com/udSrZdK.jpg?h=325"
					className="userInfoBox__img"
				/>
				{/* </div> */}
				<div className="userInfoBox__content">
					<h2 className="userInfoBox__content--name">{userx.username}</h2>
					<p className="userInfoBox__content--url">
						socool.club/{userx.username}
					</p>
				</div>
			</div>
		</Popover>
	);
};

export default UserInfoBox;
