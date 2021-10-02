import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Drawer } from "antd";
import communityApi from "api/communityApi";
import CommunityContent from "commons/CommunityContent";
import CommnunityNavbar from "components/CommnunityNavbar";
import CommunityHeader from "components/CommunityHeader";
import CommunityStat from "components/CommunityStat";
import useWindowSize from "customHook/useWindowSize";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import "./style/index.scss";

const CommunityFeature = () => {
	const { params, url } = useRouteMatch();
	const [community, setCommunity] = useState({});
	const [visibleNavbar, setVisibleNavbar] = useState(false);
	const [visibleStat, setVisibleStat] = useState(false);

	const { width } = useWindowSize();

	useEffect(() => {
		(async () => {
			const result = await communityApi.getById({ id: params.idCommunity });
			if (result.length > 0) {
				setCommunity(result[0]);
			}
		})();
	}, []);

	const handleOpenDrawler = () => {
		setVisibleNavbar(false);
	};

	const onCloseDrawerStat = () => {
		setVisibleStat(false);
	};

	return (
		<div className="communityFeature">
			<div className="communityFeature__header">
				<CommunityHeader />
			</div>

			{width > 768 ? (
				<></>
			) : (
				<div className="communityFeature__btn">
					<div className="" onClick={() => setVisibleNavbar(true)}>
						<Avatar icon={<FontAwesomeIcon icon={faChevronLeft} />} />
					</div>
					<div className="" onClick={() => setVisibleStat(true)}>
						<Avatar icon={<FontAwesomeIcon icon={faChevronRight} />} />
					</div>
				</div>
			)}

			<div className="communityFeature__body">
				{width > 768 ? (
					<>
						<div className="communityFeature__body--navbar">
							<CommnunityNavbar community={community} />
						</div>
					</>
				) : (
					<>
						<Drawer
							placement={"left"}
							closable={false}
							// onClose={onCloseDrawer}
							visible={visibleNavbar}
							key={"left"}
						>
							<div className="communityFeature__body--navbar">
								<CommnunityNavbar
									community={community}
									handleOpenDrawler={handleOpenDrawler}
								/>
							</div>
						</Drawer>
					</>
				)}
				<div className="communityFeature__body--content">
					<Switch>
						<Redirect from={url} to={`${url}/home`} exact />
						<Route path={`${url}/home`}>
							<CommunityContent community={community} id={params.idCommunity} />
						</Route>
					</Switch>
				</div>

				{width > 768 ? (
					<>
						<div className="communityFeature__body--stat">
							<CommunityStat community={community} />
						</div>
					</>
				) : (
					<>
						<Drawer
							placement={"right"}
							onClose={onCloseDrawerStat}
							visible={visibleStat}
							key={"left"}
						>
							<div className="communityFeature__body--stat">
								<CommunityStat community={community} />
							</div>
						</Drawer>
					</>
				)}
			</div>
		</div>
	);
};

export default CommunityFeature;
