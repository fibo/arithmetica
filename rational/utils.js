export const fractionToRational = (numerator, denominator) => {
	let rational = String(numerator / denominator);
	let reminder = numerator % denominator;
	if (reminder === 0n) return rational;
	rational += '.'
	while (reminder !== 0n) {
		numerator = reminder * 10n;
		reminder = numerator % denominator;
		rational += String(numerator / denominator);
	}
	return rational;
}

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
