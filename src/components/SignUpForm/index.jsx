import InputField from "components/InputField";
import PasswordField from "components/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = ({ handleSubmitRegister }) => {
	const form = useForm({
		defaultValues: {
			email: "",
			name: "",
			password: "",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {
		if (handleSubmitRegister) {
			await handleSubmitRegister(values);
		}
	};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} className="authForm">
			<div className="authForm__input">
				<InputField form={form} name="email" label="Email" />
			</div>
			<div className="authForm__input">
				<InputField form={form} name="name" label="Name" />
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

export default SignUpForm;
