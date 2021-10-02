import { unwrapResult } from "@reduxjs/toolkit";
import { logo } from "assets/images";
import { register } from "commons/useSlice";
import SignUpForm from "components/SignUpForm";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const SignUpContent = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmitRegister = async (values) => {
		try {
			const data = {
				email: values.email,
				username: values.name,
				password: values.password,
			};
			// signup(values.email, values.password);
			const action = register(data);
			const resultAction = await dispatch(action);
			unwrapResult(resultAction);
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="signInContent">
			<div className="signInContent__logo">
				<img src={logo} alt="" />
			</div>
			<div className="signInContent__title">Register your account</div>

			<SignUpForm handleSubmitRegister={handleSubmitRegister} />

			<div className="signInContent__link">
				<Link to="sign-in">Already have account? Login.</Link>
			</div>
			<div className="signInContent__forgot">
				<Link to="/forgot-password">Forgot your password?</Link>
			</div>
		</div>
	);
};

export default SignUpContent;
