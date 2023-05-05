export const fractionToRationalNumber = (bigInt, denominatorBase10Exponent) => {
	const bigIntString = String(bigInt);
	if (bigIntString === "0") return "0";
	const bigIntStringLength = BigInt(bigIntString.length);
	if (denominatorBase10Exponent === 0n) return bigIntString;
	if (bigInt < 0n) {
		// Consider leading minus sign, for example `bigIntStringLength - 1n`.
		if (bigIntStringLength - 1n === denominatorBase10Exponent) {
			return "-0." + bigIntString.slice(1);
		} else if (bigIntStringLength - 1n < denominatorBase10Exponent) {
			return "-0." + "0".repeat(
				Number(denominatorBase10Exponent - bigIntStringLength - 1n)
			) + bigIntString.slice(1);
		} else {
			return removeRightPaddedZerosFromDecimalNumber(
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
			return "0." + "0".repeat(
				Number(denominatorBase10Exponent - bigIntStringLength)
			) + bigIntString;
		} else {
			return removeRightPaddedZerosFromDecimalNumber(
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

export const rationalNumberToFraction = (rationalNumber) => {
	let [integer, mantissa] = rationalNumber.split(".");
	if (mantissa === undefined) {
		return [BigInt(integer), 0n];
	} else {
		return [BigInt(integer + mantissa), BigInt(mantissa.length)];
	}
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
