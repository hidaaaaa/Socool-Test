import React, { useState } from "react";
import { Input, InputNumber, Button, Modal, notification } from "antd";
import { useMoralis } from "react-moralis";

const SendPage = () => {
	const [address, setAddress] = useState("");
	const [value, setValue] = useState(0);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { Moralis, user } = useMoralis();

	const showModal = () => {
		if (address === "" || value === 0) {
			return notification.error({
				message: "field empty",
			});
		} else {
			setIsModalVisible(true);
		}
	};

	const handleOk = async () => {
		try {
			const options = {
				type: "erc20",
				amount: Moralis.Units.Token(value, 18),
				receiver: address,
				contract_address: "0x3817d13e9fbb1bdf4ce5a6e4aa048c704fa5a56c",
			};
			await Moralis.transfer(options);
			setIsModalVisible(false);
			return notification.success({
				message: "Send token success",
			});
		} catch (error) {
			console.log(error);
			setIsModalVisible(false);
			return notification.error({
				message: "Send token fail",
			});
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div className="balancePage ">
			<div className="balancePage__title">Transfer</div>
			<div className="balancePage__item">
				<div className="balancePage__item--name">Address </div>
				<Input
					value={address}
					onChange={(value) => setAddress(value.target.value)}
				/>
			</div>

			<div className="balancePage__item">
				<div className="balancePage__item--name">Address </div>
				<InputNumber
					value={value}
					onChange={(value) => setValue(value)}
					formatter={(value) => (value < 0 ? -value : value)}
					style={{ width: "100%" }}
				/>
			</div>

			<Button type="primary" style={{ width: "100%" }} onClick={showModal}>
				Send
			</Button>

			<Modal onOk={handleOk} onCancel={handleCancel} visible={isModalVisible}>
				Cofirm to send token ?{" "}
			</Modal>
		</div>
	);
};

export default SendPage;
