import communityApi from "api/communityApi";
import Post from "components/Post";
import React, { useEffect, useState } from "react";
import "./style/index.scss";

const Feed = ({ id, community }) => {
	// const { params } = useRouteMatch();
	const [communities, setCommunities] = useState([]);
	// console.log(params);

	useEffect(() => {
		(async () => {
			const result = await communityApi.getPostByIdCommunity({
				id: id,
			});
			console.log(result);
			if (result.length > 0) {
				setCommunities(result);
			}
		})();
	}, []);

	return (
		<div className="feed">
			{communities.length > 0 ? (
				communities.map((item, index) => (
					<>
						<div className="feed__item" key={index}>
							<Post data={item} community={community} />
						</div>
					</>
				))
			) : (
				<></>
			)}
		</div>
	);
};

export default Feed;
