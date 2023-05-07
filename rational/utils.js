export const splitRational = (rational) => {
	let [integer, mantissa] = rational.split(".");
	if (mantissa === undefined) return [integer, "", ""];
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split("_");
	return [integer, decimalFixedPart ?? "", decimalRepeatingPart ?? ""];
};

export const splittedRationalToFraction = (integer, decimalFixedPart, decimalRepeatingPart) => {
	let numerator = BigInt(integer + decimalFixedPart + decimalRepeatingPart) - BigInt(integer + decimalFixedPart);
	let denominator = BigInt("9".repeat(decimalRepeatingPart.length) + "0".repeat(decimalFixedPart.length))
	return [numerator, denominator];
};
