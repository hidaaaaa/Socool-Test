import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd";
import { logo } from "assets/images";
import React from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { formatUsername } from "utils/function/formatUsername";
import "./style/index.scss";

const CommunityHeader = () => {
	const { authenticate, isAuthenticated, logout, user } = useMoralis();

	return (
		<div className="communityHeader">
			<Link to="/" className="communityHeader__logo">
				<img src={logo} alt="home" className="communityHeader__logo--img" />
			</Link>

			<div className="communityHeader__group">
				<div className="communityHeader__group--noti">
					<FontAwesomeIcon icon={faBell} />
				</div>

				{isAuthenticated ? (
					<>
						<Dropdown
							overlay={
								<div
									className="communityHeader__group--loggout"
									onClick={() => logout()}
								>
									Loggout
								</div>
							}
							placement="bottomLeft"
							arrow
						>
							<div className="communityHeader__group--connect">
								{formatUsername(user.get("ethAddress"))}
							</div>
						</Dropdown>
					</>
				) : (
					<>
						<div
							className="communityHeader__group--connect"
							onClick={() => authenticate()}
						>
							Connect Wallet
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CommunityHeader;
