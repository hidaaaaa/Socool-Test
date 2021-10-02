import { userId } from "assets/images";
import InputField from "components/InputField";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style/index.scss";

const AuthForm = ({ onSubmit }) => {
	const form = useForm({
		defaultValues: {
			firstName: "",
			email: "",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} className="authForm">
			<div className="authForm__input">
				<InputField form={form} name="firstName" label="First name" />
				<div className="authForm__input--icon">
					<img src={userId} alt="" />
				</div>
			</div>
			<div className="authForm__input">
				<InputField form={form} name="email" label="Email" />
			</div>
			<div className="authForm__button">
				<button className="authForm__button--btn">Get Started</button>
			</div>
			<p className="authForm__link">
				New to SoCool Business? <Link to="/sign-up">Sign up</Link> for free.
			</p>
		</form>
	);
};

export default AuthForm;
