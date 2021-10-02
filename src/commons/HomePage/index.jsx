import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Col, Row } from "antd";
import communityApi from "api/communityApi";
import LoadingPage from "components/LoadingPage";
import useWindowSize from "customHook/useWindowSize";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGreeting } from "utils/function/date";
import "./style/index.scss";

const HomePage = () => {
	const user = useSelector((state) => state.auth.current.user);
	const [isLoading, setIsloading] = useState(true);
	const [communities, setCommunities] = useState([]);
	const { width } = useWindowSize();

	useEffect(() => {
		(async () => {
			const result = await communityApi.getByUserId({ id: user.id });
			console.log(result);
			if (result.length > 0) {
				setCommunities(result);
				setIsloading(false);
			}
		})();
	}, []);

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className="homePage">
			<div className="homePage__header">
				<h1 className="homePage__header--greeting">{getGreeting()},</h1>
				<h1 className="homePage__header--name">{user.username}</h1>
			</div>

			<div className="homePage__communities">
				<div className="homePage__communities--title title">
					<h2 className="title__name">Communities</h2>
					<Button className="title__btn">
						<Link to="/u/home/create-community">
							<FontAwesomeIcon icon={faPlus} />
							Create
						</Link>
					</Button>
				</div>

				<div className="homePage__communities--content ">
					<Row justify="space-between" className="homePage__communities--list">
						{communities.map((community) => (
							<Col
								span={width > 768 ? 11 : 24}
								key={community.id}
								// className="homePage__communities--item"
							>
								<Link
									to={`/community/${community.id}`}
									className="homePage__communities--item"
								>
									<Avatar
										src={
											!!community.logoUrl
												? `${process.env.REACT_APP_BASE_API}${community.logoUrl.formats.thumbnail.url}`
												: ""
										}
										size={"100%"}
										className="homePage__communities--logo"
									/>

									<div className="homePage__communities--name">
										{community.name}
									</div>
								</Link>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
