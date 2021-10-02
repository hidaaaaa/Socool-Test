import { notification } from "antd";
import userApi from "api/userApi";
import { logo } from "assets/images";
import ForgotForm from "components/ForgotForm";
import ResetForm from "components/ResetForm";
import useQuery from "customHook/useQuery";
import React from "react";
import { Link } from "react-router-dom";

const ForgotContent = () => {
	let query = useQuery();

	const handleSubmitForgot = async (values) => {
		const data = {
			email: values.email,
		};

		const result = await userApi.forgotPassword(data);
		console.log(result);
		if (result.ok) {
			return notification.success({
				message: "Send email successful",
				description: "Check your email to reset password",
			});
		} else {
			return notification.error({
				message: "Send email error",
				description: "Please check your email and try again",
			});
		}
	};

	const handleSubmitReset = async (values) => {
		const data = {
			code: query.get("code"),
			password: values.password,
			passwordConfirmation: values.password,
		};

		const result = userApi.resetPassword(data);
		console.log(result);

		if (!!result.jwt) {
			return notification.success({
				message: "Reset password successful",
			});
		} else {
			return notification.error({
				message: "Reset password fail",
			});
		}
	};

	return (
		<div className="signInContent">
			<div className="signInContent__logo">
				<img src={logo} alt="" />
			</div>
			<div className="signInContent__title">Reset your account</div>
			{!!query.get("code") ? (
				<ResetForm handleSubmitReset={handleSubmitReset} />
			) : (
				<>
					<ForgotForm handleSubmitForgot={handleSubmitForgot} />
					<div className="signInContent__link">
						<Link to="sign-in">Already have account? Login.</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default ForgotContent;
