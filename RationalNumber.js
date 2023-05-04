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

	let firstLetter = arg.charAt(0);
	let secondLetter = arg.charAt(1);
	let thirdLetter = arg.charAt(2);

	// Cannot have right padded zeros.
	if (firstLetter === "0" && secondLetter === "0") return false;
	if (firstLetter === "-" && secondLetter === "0" && thirdLetter === "0")
		return false;

	// It must have a number after minus sign.
	if (firstLetter === "-" && secondLetter === ".") return false;

	// It cannot be `-0`.
	if (firstLetter === "-" && secondLetter === "0" && thirdLetter === "")
		return false;

	return true;
};
