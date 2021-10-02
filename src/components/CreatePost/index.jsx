import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Input } from "antd";
import React from "react";
import "./style/index.scss";

const CreatePost = () => {
	return (
		<div className="createPost">
			<Input
				className="createPost__input"
				placeholder="Post..."
				bordered={false}
			/>

			<div className="createPost__group">
				<Avatar icon={<FontAwesomeIcon icon={faImage} />} />
				<Avatar icon={<FontAwesomeIcon icon={faVideo} />} />
			</div>
		</div>
	);
};

export default CreatePost;
