import InputField from "components/InputField";
import React from "react";
import { useForm } from "react-hook-form";

const ForgotForm = ({ handleSubmitForgot }) => {
	const form = useForm({
		defaultValues: {
			email: "",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {
		if (handleSubmitForgot) {
			await handleSubmitForgot(values);
		}
	};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} className="authForm">
			<div className="authForm__input">
				<InputField form={form} name="email" label="Email" />
			</div>

			<div className="authForm__button">
				<button className="authForm__button--btn">Get Started</button>
			</div>
		</form>
	);
};

export default ForgotForm;
