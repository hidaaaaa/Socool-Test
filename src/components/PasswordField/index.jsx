import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const PasswordField = ({
	form,
	label,
	name,
	defaultValue = "",
	disabled = false,
}) => {
	return (
		<div className="inputField">
			<Controller
				name={name}
				control={form.control}
				render={({ field: { onChange, onBlur, value, name, ref } }) => (
					<Input.Password
						bordered={false}
						placeholder={label}
						defaultValue={defaultValue}
						size={`large`}
						className="inputField__input"
						ref={ref}
						name={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						disabled={disabled}
					/>
				)}
			/>
		</div>
	);
};

export default PasswordField;
