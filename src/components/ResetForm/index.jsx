import PasswordField from "components/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";

const ResetForm = ({ handleSubmitReset }) => {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {
		if (handleSubmitReset) {
			await handleSubmitReset(values);
		}
	};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)} className="authForm">
			<div className="authForm__input">
				<PasswordField form={form} name="password" label="New password" />
			</div>
			<div className="authForm__input">
				<PasswordField
					form={form}
					name="rePassword"
					label="New password confirm"
				/>
			</div>

			<div className="authForm__button">
				<button className="authForm__button--btn">Reset password</button>
			</div>
		</form>
	);
};

export default ResetForm;
