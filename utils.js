export const commonDenominator = (exponentA, exponentB) => {
	let denominator = "1";
	while (denominator.length < Math.max(exponentA, exponentB)) {
		denominator += "0";
	}
};

export const rationalNumberToFraction = (rationalNumber) => {
	let [integer, mantissa] = rationalNumber.split(".");

	// Remove right padded zeros from mantissa
	// TODO

	const denominatorBase10Exponent = mantissa?.length ?? 0;

	return denominatorBase10Exponent === 0
		? [BigInt(integer), 0]
		: [BigInt(integer + mantissa), denominatorBase10Exponent];
};
