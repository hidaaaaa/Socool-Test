import { faAward, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Input, Radio } from "antd";
import UploadField from "components/UploadField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./style/index.scss";

const CreateCommunityForm = ({ handleSubmitCreateCommunity, isLoading }) => {
	const form = useForm({
		defaultValues: {
			name: "",
			description: "",
			logoUrl: null,
			coverUrl: null,
			communityType: "open",
		},
		// resolver: yupResolver(schema),
	});

	const handleSubmit = async (values) => {
		if (handleSubmitCreateCommunity) {
			await handleSubmitCreateCommunity(values);
		}
	};

	return (
		<form
			onSubmit={form.handleSubmit(handleSubmit)}
			className="createCommunityForm"
		>
			<div className="createCommunityForm__basic">
				<div className="createCommunityForm__basic--image image">
					<div className="image__title">Logo</div>

					<div className="image__img">
						<UploadField form={form} name="logoUrl" label="" />
					</div>
				</div>

				<div className="createCommunityForm__basic--group group">
					<div className="group__title">Name</div>
					<Controller
						name={"name"}
						control={form.control}
						render={({ field: { onChange, onBlur, value, name, ref } }) => (
							<Input
								bordered={false}
								size={`large`}
								className="group__input"
								ref={ref}
								name={name}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>

					<div className="group__title">Descripe your community</div>
					<Controller
						name={"description"}
						control={form.control}
						render={({ field: { onChange, onBlur, value, name, ref } }) => (
							<Input.TextArea
								bordered={false}
								size={`large`}
								autoSize={{ minRows: 3, maxRows: 3 }}
								className="group__input"
								ref={ref}
								name={name}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
				</div>
			</div>

			<div className="createCommunityForm__cover">
				<div className="createCommunityForm__cover--title">Cover</div>
				<div className="createCommunityForm__cover--img">
					<UploadField form={form} name="coverUrl" label="" />
				</div>
			</div>

			<div className="createCommunityForm__access">
				<div className="createCommunityForm__access--title">
					Community Access
				</div>
				<Controller
					name={"communityType"}
					control={form.control}
					render={({ field: { onChange, onBlur, value, name, ref } }) => (
						<Radio.Group
							ref={ref}
							name={name}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							className="group"
						>
							<Radio.Button value="open" className="group__item">
								<Avatar
									className="group__item--icon"
									icon={<FontAwesomeIcon icon={faCheck} />}
								/>
								<div className="group__item--name">Open</div>
								<div className="group__item--description">
									Anyone can join this community. Free of charge.
								</div>
							</Radio.Button>
							<Radio.Button value="premium" className="group__item">
								<Avatar
									className="group__item--icon"
									icon={<FontAwesomeIcon icon={faAward} />}
								/>

								<div className="group__item--name">Premium</div>
								<div className="group__item--description">
									Only Premium user. Pay Subscription fees.
								</div>
							</Radio.Button>
						</Radio.Group>
					)}
				/>
			</div>

			<div className="createCommunityForm__button">
				<button
					disabled={isLoading}
					className={`createCommunityForm__button--btn ${
						isLoading && "loading"
					}`}
				>
					{isLoading ? "Loading..." : "Create Community"}
				</button>
			</div>
		</form>
	);
};

export default CreateCommunityForm;
