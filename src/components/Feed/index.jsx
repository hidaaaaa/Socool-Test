import communityApi from "api/communityApi";
import LoadingPage from "components/LoadingPage";
import Post from "components/Post";
import React, { useEffect, useState } from "react";
import "./style/index.scss";

const Feed = ({ id, community }) => {
	const [isLoading, setIsloading] = useState(true);
	const [communities, setCommunities] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await communityApi.getPostByIdCommunity({
				id: id,
			});
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
