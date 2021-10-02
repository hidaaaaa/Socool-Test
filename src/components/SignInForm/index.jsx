import InputField from "components/InputField";
import PasswordField from "components/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";

const SignInForm = ({ handleSubmitLogin }) => {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {
		if (handleSubmitLogin) {
			await handleSubmitLogin(values);
		}
	};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} className="authForm">
			<div className="authForm__input">
				<InputField form={form} name="email" label="Email" />
			</div>
			<div className="authForm__input">
				<PasswordField form={form} name="password" label="Password" />
			</div>
			<div className="authForm__button">
				<button className="authForm__button--btn">Get Started</button>
			</div>
		</form>
	);
};

export default SignInForm;
