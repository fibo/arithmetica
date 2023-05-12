import { floatToBase10Fraction } from "../float/utils.js";

export const fractionToRational = (numerator, denominator) => {
	let integerPart = String(numerator / denominator);
	let reminder = numerator % denominator;
	if (reminder === 0n) return integerPart;
	let decimalPart = "";
	let digit;
	let i; // index of first repeating decimal
	while (true) {
		numerator = reminder * 10n;
		digit = String(numerator / denominator);
		i = decimalPart.indexOf(digit);
		if (i > -1)
			return integerPart + "." + decimalPart.slice(0, i) + "_" + decimalPart.slice(i);
		decimalPart += digit;
		reminder = numerator % denominator;
		if (reminder === 0n)
			return integerPart + "." + decimalPart;
	}
};

export const splitRational = (rational) => {
	let [integer, mantissa] = rational.split(".");
	if (mantissa === undefined) return [integer, "", ""];
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split("_");
	return [integer, decimalFixedPart ?? "", decimalRepeatingPart ?? ""];
};

export const splittedRationalToFraction = (
	integer,
	decimalFixedPart,
	decimalRepeatingPart
) => {
	if (!decimalRepeatingPart) {
		if (decimalFixedPart) {
			let [bigInt, denominatorBase10Exponent] = floatToBase10Fraction(integer + "." + decimalFixedPart);
			return [bigInt, 10n ** denominatorBase10Exponent];
		} else {
			return [BigInt(integer), 1n];
		}
	}
	let numerator =
		BigInt(integer + decimalFixedPart + decimalRepeatingPart) -
		BigInt(integer + decimalFixedPart);
	let denominator = BigInt(
		"9".repeat(decimalRepeatingPart.length) +
			"0".repeat(decimalFixedPart.length)
	);
	return [numerator, denominator];
};
