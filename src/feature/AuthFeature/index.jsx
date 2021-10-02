import AuthIntroduce from "commons/AuthIntroduce";
import React from "react";
import AuthContent from "../../commons/AuthContent";
import "./style/index.scss";

const AuthFeature = () => {
	return (
		<div className="authFeature">
			<div className="authFeature__content">
				<AuthContent />
			</div>

			<div className="authFeature__introduce">
				<AuthIntroduce />
			</div>
		</div>
	);
};

export default AuthFeature;
