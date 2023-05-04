export const isRealNumber = (arg) => {
	if (typeof arg !== "string") return false;
	if (arg.includes("-")) {
		if (arg.charAt(0) !== "-") return false;
	}
	return true;
};
