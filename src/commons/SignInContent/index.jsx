import { unwrapResult } from "@reduxjs/toolkit";
import { logo } from "assets/images";
import { signUp } from "commons/useSlice";
import SignInForm from "components/SignInForm";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./style/index.scss";

const SignInContent = () => {
	const [isSignInByEmail, setIsSignInByEmail] = useState(true);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChangeSignInByEmail = () => {
		setIsSignInByEmail(false);
	};

	const handleSubmitLogin = async (values) => {
		const data = {
			identifier: values.email,
			password: values.password,
		};
		// login(values.email, values.password);
		const action = signUp(data);
		const resultAction = await dispatch(action);
		unwrapResult(resultAction);
		history.push("/");
	};

	return (
		<div className="signInContent">
			<div className="signInContent__logo">
				<img src={logo} alt="" />
			</div>
			<div className="signInContent__title">Log in to your account</div>
			{isSignInByEmail ? (
				<>
					<div className="signInContent__button">
						<button
							className="signInContent__button--btn phone"
							onClick={handleChangeSignInByEmail}
						>
							Sign in with a phone number
						</button>
						<button className="signInContent__button--btn twitter">
							Continue with Twitter
						</button>
						<button className="signInContent__button--btn facebook">
							Continue with Facebook
						</button>
					</div>
				</>
			) : (
				<SignInForm handleSubmitLogin={handleSubmitLogin} />
			)}

			<div className="signInContent__link">
				<Link to="sign-up">Don't have an account? Sign up.</Link>
			</div>
			<div className="signInContent__forgot">
				<Link to="/forgot-password">Forgot your password?</Link>
			</div>
		</div>
	);
};

export default SignInContent;
