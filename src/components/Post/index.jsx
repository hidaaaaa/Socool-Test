import { Avatar } from "antd";
import { Comment, Heart, Play } from "assets/images";
import CustomCarousel from "components/CustomCarousel";
import React from "react";
import "./style/index.scss";
import moment from "moment";

const Post = ({ data, community }) => {
	return (
		<div className="post">
			<div className="post__brand">Brand Board</div>
			<div className="post__logo">
				<Avatar
					src={
						!!community.logoUrl
							? `${process.env.REACT_APP_BASE_API}${community.logoUrl?.formats.small.url}`
							: "https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png"
					}
					className="post__logo--image"
				/>

				<div className="post__logo--group group">
					<div className="group__name">{community.name}</div>
					<div className="group__time">{moment(data.created_at).fromNow()}</div>
				</div>
			</div>

			<div className="post__description">{data.description}</div>

			<div className="post__photo">
				<CustomCarousel data={data.listImages} />
			</div>

			<div className="post__buttons">
				<div className="post__buttons--btn btn">
					<div className="btn__icon">
						<img src={Play} alt="" />
					</div>

					<div className="btn__title">{data.plays}</div>
				</div>
				<div className="post__buttons--btn btn">
					<div className="btn__icon">
						<img src={Heart} alt="" />
					</div>

					<div className="btn__title">{data.likes}</div>
				</div>
				<div className="post__buttons--btn btn">
					<div className="btn__icon">
						<img src={Comment} alt="" />
					</div>

					<div className="btn__title">{data.comments}</div>
				</div>
			</div>

			<div className="post__end">Fortnite channel's video</div>
		</div>
	);
};

export default Post;
