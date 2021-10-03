import { faCopy, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, notification, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { hideAddress } from "utils/function/formatUsername";
import "./style/index.scss";

const BalancePage = () => {
	const [balance, setBalance] = useState({});
	const [isHide, setIsHide] = useState(true);
	const { Moralis, user } = useMoralis();
	const [listTransaction, setListTransaction] = useState([]);

	useEffect(() => {
		(async () => {
			const options = {
				chain: "bsc testnet",
			};
			const tokenMetadata = await Moralis.Web3API.account.getTokenBalances(
				options
			);

			if (tokenMetadata.length > 0) {
				const token = tokenMetadata.find(
					(item) =>
						item.token_address === "0x3817d13e9fbb1bdf4ce5a6e4aa048c704fa5a56c"
				);

				!!token && setBalance(token);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const options = {
				chain: "bsc testnet",
			};
			const transactions = await Moralis.Web3API.account.getTransactions(
				options
			);

			const temp = transactions.result
				.filter(
					(item) =>
						item.from_address === user.get("ethAddress") ||
						item.to_address === user.get("ethAddress")
				)
				.sort((item1, item2) => {
					return (
						new Date(item2.block_timestamp) - new Date(item1.block_timestamp)
					);
				});

			setListTransaction(temp);
		})();
	}, []);

	return (
		<div className="balancePage">
			<div className="balancePage__title">Infomation</div>

			<div className="balancePage__item">
				<div className="balancePage__item--name">Address </div>
				<div className="balancePage__item--value">
					{isHide
						? hideAddress(user.get("ethAddress"))
						: user.get("ethAddress")}
				</div>
				<Avatar
					className="balancePage__item--btn"
					icon={
						isHide ? (
							<FontAwesomeIcon icon={faEye} />
						) : (
							<FontAwesomeIcon icon={faEyeSlash} />
						)
					}
					onClick={() => setIsHide(!isHide)}
				/>

				<Avatar
					className="balancePage__item--btn"
					icon={<FontAwesomeIcon icon={faCopy} />}
					onClick={() => {
						navigator.clipboard.writeText(user.get("ethAddress"));
						return notification.success({
							message: "copy success",
						});
					}}
				/>
			</div>

			<div className="balancePage__item">
				<div className="balancePage__item--name">Balance </div>

				<div className="balancePage__item--value">
					{Object.keys(balance).length !== 0
						? balance.balance / Math.pow(10, 18)
						: 0}
					$TSCION
				</div>
			</div>

			<Table dataSource={listTransaction} columns={columns} />
		</div>
	);
};

export default BalancePage;

const columns = [
	{
		title: "Date",
		dataIndex: "block_timestamp",
		key: "block_timestamp",
		ellipsis: true,
		render: (block_timestamp) => {
			return moment(new Date(block_timestamp)).fromNow();
		},
	},
	{
		title: "Hax",
		dataIndex: "Hax",
		key: "Hax",
		ellipsis: true,
	},
	{
		title: "From",
		dataIndex: "from_address",
		key: "from_address",
		ellipsis: true,
	},
	{
		title: "To",
		dataIndex: "to_address",
		key: "to_address",
		ellipsis: true,
	},
	{
		title: "Value",
		dataIndex: "value",
		key: "value",
		render: (value) => <>{value / Math.pow(10, 18)}</>,
	},
];
