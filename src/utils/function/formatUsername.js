export const formatUsername = (name) => {
	return name.slice(0, 6) + "..." + name.slice(name.length - 6, name.length);
};

export const hideAddress = (address) => {
	let hide = "";
	for (let i = 0; i < address.length - 12; i++) {
		hide = hide + "*";
	}

	return (
		address.slice(0, 6) +
		hide +
		address.slice(address.length - 6, address.length)
	);
};
