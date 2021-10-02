import { Avatar } from "antd";
import { logo } from "assets/images";
import AuthForm from "components/AuthForm";
import React from "react";
import "./style/index.scss";

const AuthContent = () => {
	return (
		<div className="authContent">
			<div className="authContent__logo">
				<img src={logo} alt="" />
			</div>
			<div className="authContent__title">Want to see SoCool in action?</div>
			<div className="authContent__descripton">
				Watch an on-demand product walkthrough or live demo (your choice), and
				start your free 14-day trial.
			</div>
			<div className="authContent__groupAvatar">
				<Avatar.Group>
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<Avatar src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"></Avatar>
					<Avatar style={{ backgroundColor: "#f56a00" }}>B</Avatar>
				</Avatar.Group>
			</div>
			<div className="authContent__form">
				<AuthForm />
			</div>
		</div>
	);
};

export default AuthContent;
