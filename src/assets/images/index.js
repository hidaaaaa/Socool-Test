import logo from "./logo/logo.svg";
import userId from "./icon/user-id.svg";

import home from "./icon/home.svg";
import events from "./icon/events.svg";
import newsletter from "./icon/newsletter.svg";
import store from "./icon/store.svg";
import insights from "./icon/insights.svg";
import forYou from "./icon/for-you.svg";
import settings from "./icon/settings.svg";
import Members from "./icon/members.svg";
import Video from "./icon/video.svg";
import My from "./icon/my.svg";
import Play from "./icon/play.svg";
import Heart from "./icon/heart.svg";
import Comment from "./icon/comment.svg";

const mainMenuData = [
	{
		icon: home,
		title: "Home",
		url: "/home",
	},
	{
		icon: events,
		title: "Events",
		url: "/events",
	},
	{
		icon: newsletter,
		title: "Newsletter",
		url: "/newsletter",
	},
	{
		icon: store,
		title: "Store",
		url: "/store",
	},
	{
		icon: insights,
		title: "Insights",
		url: "/insights",
	},
	{
		icon: forYou,
		title: "For you",
		url: "/for-you",
	},
	{
		icon: settings,
		title: "Settings",
		url: "/settings",
	},
];

const communityMenu = [
	{
		icon: home,
		title: "Home",
		url: "/home",
	},
	{
		icon: store,
		title: "Store",
		url: "/store",
	},
	{
		icon: Members,
		title: "Members",
		url: "/members",
	},
	{
		icon: Video,
		title: "Video",
		url: "/video",
	},
	{
		icon: My,
		title: "My",
		url: "/my",
	},
];

export { logo, userId, Play, Comment, Heart, mainMenuData, communityMenu };
