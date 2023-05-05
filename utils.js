export const fractionToRationalNumber = (bigInt, denominatorBase10Exponent) => {
	const bigIntString = String(bigInt);
	const bigIntStringLength = bigIntString.length;
	if (denominatorBase10Exponent === 0) return bigIntString;
	if (bigInt < 0) {
		// Consider leading minus sign, for example `bigIntStringLength - 1`.
		if (bigIntStringLength - 1 === denominatorBase10Exponent) {
			return "-0." + bigIntString.slice(1);
		} else if (bigIntStringLength - 1 < denominatorBase10Exponent) {
			return "-0." + "0".repeat(
				denominatorBase10Exponent - bigIntStringLength - 1
			) + bigIntString.slice(1);
		} else {
			return removeRightPaddedZerosFromDecimalNumber(
				"-" + bigIntString.slice(
						1,
						bigIntStringLength - denominatorBase10Exponent
					) + "." + bigIntString.slice(
						bigIntStringLength - denominatorBase10Exponent
					)
			);
		}
	} else {
		if (bigIntStringLength === denominatorBase10Exponent) {
			return "0." + bigIntString;
		} else if (bigIntStringLength < denominatorBase10Exponent) {
			return "0." + "0".repeat(
				denominatorBase10Exponent - bigIntStringLength
			) + bigIntString;
		} else {
			return removeRightPaddedZerosFromDecimalNumber(
				bigIntString.slice(
					0,
					bigIntStringLength - denominatorBase10Exponent
				) + "." + bigIntString.slice(
					bigIntStringLength - denominatorBase10Exponent
				)
			);
		}
	}
};

export const rationalNumberToFraction = (rationalNumber) => {
	const [integer, mantissa] = splitRationalNumber(rationalNumber);
	const denominatorBase10Exponent = mantissa.length;
	return denominatorBase10Exponent === 0
		? [BigInt(integer), 0]
		: [BigInt(integer + mantissa), denominatorBase10Exponent];
};

// This function is used internally, only for decimals.
// Cases when `bigIntString` is `0` or any other integer are not handled.
export const removeRightPaddedZerosFromDecimalNumber = (bigIntString) => {
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

export const splitRationalNumber = (rationalNumber) => {
	let [integer, mantissa] = rationalNumber.split(".");
	if (mantissa === undefined) mantissa = "";
	return [integer, mantissa];
};
