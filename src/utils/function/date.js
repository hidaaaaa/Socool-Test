function getGreeting() {
	let ndate = new Date();
	let hours = ndate.getHours();
	var message =
		hours < 12
			? "Good morning"
			: hours < 18
			? "Good afternoon"
			: "Good evening";

	return message;
}

export { getGreeting };
