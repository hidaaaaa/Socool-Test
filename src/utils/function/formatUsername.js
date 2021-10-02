export const formatUsername = (name) => {
	return name.slice(0, 6) + "..." + name.slice(name.length - 6, name.length);
};
