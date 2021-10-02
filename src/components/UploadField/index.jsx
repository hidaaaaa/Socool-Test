import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Upload } from "antd";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import "./style/index.scss";

const UploadField = ({
	form,
	name,
	label,
	defaultValue = "",
	disabled = false,
}) => {
	const [file, setFile] = useState(null);

	return (
		<div className="uploadField">
			<img
				className="uploadField__img"
				src={
					!!file
						? URL.createObjectURL(file)
						: "https://marketplace.canva.com/EADan_NluPk/3/0/1600w/canva-explore-brush-script-facebook-cover-aFijYoWOEqY.jpg"
				}
				alt=""
			/>
			<Controller
				name={name}
				control={form.control}
				render={({ field: { onChange, onBlur, value, name, ref } }) => (
					<Upload
						showUploadList={false}
						beforeUpload={() => false}
						ref={ref}
						name={name}
						value={value}
						onChange={(values) => {
							setFile(values.file);
							onChange(values.file);
						}}
						onBlur={onBlur}
						disabled={disabled}
					>
						<div className="uploadField__btn">
							<FontAwesomeIcon icon={faArrowUp} />
						</div>
					</Upload>
				)}
			/>
		</div>
	);
};

export default UploadField;
