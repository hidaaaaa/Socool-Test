import { notification } from "antd";
import communityApi from "api/communityApi";
import axios from "axios";
import CreateCommunityForm from "components/CreateCommunityForm";
import LoadingPage from "components/LoadingPage";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./style/index.scss";

const CreateCommunityPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const user = useSelector((state) => state.auth.current.user);
	const { Moralis } = useMoralis();
	const history = useHistory();
	// console.log(user.id);
	const handleSubmitCreateCommunity = async (values) => {
		setIsLoading(true);

		const options = {
			type: "erc20",
			amount: Moralis.Units.Token(30, 18),
			receiver: "0x29c09481a11e85cb57d949d03984a13f1a2bc956",
			contract_address: "0x3817d13e9fbb1bdf4ce5a6e4aa048c704fa5a56c",
		};

		let logoUrl = null;
		let coverUrl = null;

		const formDataLogo = new FormData();
		const formDataCover = new FormData();

		try {
			if (!!values.logoUrl) {
				formDataLogo.append("files", values.logoUrl);
				const logoUrlResult = await axios.post(
					`${process.env.REACT_APP_BASE_API}/upload`,
					formDataLogo
				);
				logoUrl = logoUrlResult.data[0];
			}
			if (!!values.coverUrl) {
				formDataCover.append("files", values.coverUrl);
				const coverUrlResult = await axios.post(
					`${process.env.REACT_APP_BASE_API}/upload`,
					formDataCover
				);
				coverUrl = coverUrlResult.data[0];
			}
		} catch (error) {
			console.log(error);
		}

		const communityData = {
			...values,
			adminId: `${user.id}`,
			logoUrl: !!values.logoUrl ? logoUrl : null,
			coverUrl: !!values.coverUrl ? coverUrl : null,
		};

		try {
			if (values.communityType !== "open") {
				let result = await Moralis.transfer(options);
				await console.log(result);
				const data = communityApi.createCommnutity(communityData);
				if (!!!data.error) {
					setIsLoading(false);
					history.push("/");
					return notification.success({
						message: "Create success",
					});
				}
			} else {
				console.log(communityData);
				const data = communityApi.createCommnutity(communityData);
				if (!!!data.error) {
					setIsLoading(false);
					history.push("/");
					return notification.success({
						message: "Create success",
					});
				}
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return notification.error({
				message: "transfer fail",
			});
		}
	};

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className="createCommunityPage">
			<h1 className="createCommunityPage__title">Create Community</h1>

			<div className="createCommunityPage__form">
				<h2 className="createCommunityPage__form--title">Basic Information</h2>
				<CreateCommunityForm
					handleSubmitCreateCommunity={handleSubmitCreateCommunity}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default CreateCommunityPage;
