export const denominatorBase10ExponentsToCommonDenominator = (
	denominatorBase10ExponentA,
	denominatorBase10ExponentB
) => {
	if (denominatorBase10ExponentA == denominatorBase10ExponentB) {
		if (denominatorBase10ExponentA == 0) return 1;
		return Math.pow(10, denominatorBase10ExponentA);
	}
	return Math.pow(
		10,
		Math.max(denominatorBase10ExponentA, denominatorBase10ExponentB)
	);
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
