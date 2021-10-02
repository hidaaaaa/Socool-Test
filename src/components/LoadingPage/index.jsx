import { Spin } from "antd";
import React from "react";
import "./style/index.scss";

const LoadingPage = () => {
	return (
		<div className="loadingPage">
			{" "}
			<Spin tip="Loading..."></Spin>
		</div>
	);
};

export default LoadingPage;
