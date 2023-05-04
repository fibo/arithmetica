export const isRationalNumber = (arg) => {
	if (typeof arg !== "string") return false;

	let letter;
	let hasDecimalSeparator = false;

	for (let i = 0; i < arg.length; i++) {
		letter = arg.charAt(i);

		// Can start with a minus sign.
		if (i == 0 && letter == "-") continue;

		if (letter == ".") {
			// Cannot have more than one decimal separator.
			if (hasDecimalSeparator) return false;

			// Cannot end with a decimal separator.
			if (i == arg.length - 1) return false;

			hasDecimalSeparator = true;
			continue;
		}

		if ("0123456789".includes(letter)) continue;

		return false;
	}

	return true;
};
