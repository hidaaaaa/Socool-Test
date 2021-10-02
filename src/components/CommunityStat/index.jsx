import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style/index.scss";

const CommunityStat = ({ community }) => {
	return (
		<>
			<div className="communityStat">
				<div className="communityStat__title">Community's Stat</div>

				<div className="communityStat__content">
					<div className="communityStat__content--item item">
						<div className="item__title">Videos</div>
						<div className="item__total">
							{!!community.videos ? community.videos : 0}
						</div>
					</div>
					<div className="communityStat__content--item item">
						<div className="item__title">Posts</div>
						<div className="item__total">
							{!!community.posts ? community.posts : 0}
						</div>
					</div>
					<div className="communityStat__content--item item">
						<div className="item__title">Play</div>
						<div className="item__total">
							{!!community.play ? community.play : 0}
						</div>
					</div>
					<div className="communityStat__content--item item">
						<div className="item__title">Like</div>
						<div className="item__total">
							{!!community.like ? community.like : 0}
						</div>
					</div>
					<div className="communityStat__content--item item">
						<div className="item__title">Comments</div>
						<div className="item__total">
							{!!community.comments ? community.comments : 0}
						</div>
					</div>
				</div>
			</div>
			<div className="communityStat share">
				<div className="share__icon">Share this community</div>
				<div className="share__icon">
					<FontAwesomeIcon icon={faUpload} />
				</div>
			</div>
		</>
	);
};

export default CommunityStat;
