import React from "react";
import ReactPlayer from "react-player";
import "./style/index.scss";

const AuthIntroduce = () => {
	return (
		<div className="authIntroduce">
			<div className="authIntroduce__video">
				<div className="player-wrapper">
					<ReactPlayer
						className="react-player"
						url="https://www.youtube.com/watch?v=2lBFoxLvYHs"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<div className="authIntroduce__content">
				<div className="authIntroduce__content--description">
					“People will always want to have interactive group experiences with
					their friends, they’ll always want to cut out the middleman when
					possible, and they’ll always want good value for their money. Don't
					build a website, build a community.”
				</div>
				<div className="authIntroduce__content--profile">
					<h1>Kenvin Duong</h1>
					<p>Co-founder and CEO, SoCool</p>
				</div>
			</div>
		</div>
	);
};

export default AuthIntroduce;
