export const base10FractionToFloat = (bigInt, denominatorBase10Exponent) => {
	const bigIntString = String(bigInt);
	if (bigIntString === "0") return "0";
	const bigIntStringLength = BigInt(bigIntString.length);
	if (denominatorBase10Exponent === 0n) return bigIntString;
	if (bigInt < 0n) {
		// Consider leading minus sign, for example `bigIntStringLength - 1n`.
		if (bigIntStringLength - 1n === denominatorBase10Exponent) {
			return "-0." + bigIntString.slice(1);
		} else if (bigIntStringLength - 1n < denominatorBase10Exponent) {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				"-0." + "0".repeat(
					Number(denominatorBase10Exponent - bigIntStringLength + 1n)
				) + bigIntString.slice(1)
			)
		} else {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				"-" + bigIntString.slice(
						1,
						Number(bigIntStringLength - denominatorBase10Exponent)
					) + "." + bigIntString.slice(
						Number(bigIntStringLength - denominatorBase10Exponent)
					)
			);
		}
	} else {
		if (bigIntStringLength === denominatorBase10Exponent) {
			return "0." + bigIntString;
		} else if (bigIntStringLength < denominatorBase10Exponent) {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				"0." + "0".repeat(
					Number(denominatorBase10Exponent - bigIntStringLength)
				) + bigIntString
			)
		} else {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				bigIntString.slice(
					0,
					Number(bigIntStringLength - denominatorBase10Exponent)
				) + "." + bigIntString.slice(
					Number(bigIntStringLength - denominatorBase10Exponent)
				)
			);
		}
	}
};

export const quotientToFloat = (integerA, integerB) => {
	let reminder = integerA % integerB;
	if (reminder === 0n) return String(integerA / integerB);
	let decimalPart = "";
	let numerator;
	while (reminder !== 0n) {
		numerator = reminder * 10n;
		decimalPart += String(numerator / integerB);
		reminder = numerator % integerB;
	}
	return String(integerA / integerB) + "." + decimalPart;
}

export const floatToBase10Fraction = (floatStr) => {
	let [integer, mantissa] = floatStr.split(".");
	if (mantissa === undefined) return [BigInt(integer), 0n];
	return [BigInt(integer + mantissa), BigInt(mantissa.length)];
};

// This function is used internally, only for numbers with mantissa.
// Cases when `bigIntString` is `0` or any other integer are not handled.
export const removeRightPaddedZerosFromNonRepeatingDecimal = (bigIntString) => {
	const bigIntStringLength = bigIntString.length;
	let i = bigIntStringLength - 1;
	let letter;
	while (true) {
		letter = bigIntString.charAt(i);
		if (letter === "0") {
			i--;
			continue;
		}
		break;
	}
	if (i === bigIntStringLength - 1) {
		return bigIntString;
	}
	if (bigIntString.charAt(i) === ".") {
		return bigIntString.slice(0, i);
	} else {
		return bigIntString.slice(0, i + 1);
	}
};
