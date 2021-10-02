import CreatePost from "components/CreatePost";
import Feed from "components/Feed";
import React from "react";
import "./style/index.scss";

const CommunityContent = ({ community, id }) => {
	return (
		<div className="communityContent">
			<div className="communityContent__cover">
				<img
					src={
						!!community.coverUrl
							? `${process.env.REACT_APP_BASE_API}${community.coverUrl?.formats.small.url}`
							: "https://www.viet247.net/images/noimage_food_viet247.jpg"
					}
					alt=""
				/>
			</div>

			<div className="communityContent__createPost">
				<CreatePost />
			</div>

			<div className="communityContent__feed">
				<Feed id={id} community={community} />
			</div>
		</div>
	);
};

export default CommunityContent;
