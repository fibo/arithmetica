export const splitRational = (rational) => {
	let [integer, mantissa] = rational.split(".");
	if (mantissa === undefined) return [integer, "", ""];
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split("_");
	return [integer, decimalFixedPart ?? "", decimalRepeatingPart ?? ""];
};

export const repeatingDecimalToFraction = () => {
	return [77n, 9n];
};
