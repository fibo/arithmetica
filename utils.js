export const denominatorBase10ExponentsToCommonDenominator = (
	denominatorBase10ExponentA,
	denominatorBase10ExponentB
) => {
	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		if (denominatorBase10ExponentA === 0) return 1;
		return Math.pow(10, denominatorBase10ExponentA);
	}
	return Math.pow(
		10,
		Math.max(denominatorBase10ExponentA, denominatorBase10ExponentB)
	);
};

export const rationalNumberToFraction = (rationalNumber) => {
	const [integer, mantissa] = splitRationalNumber(rationalNumber);

	const denominatorBase10Exponent = mantissa.length;

	return denominatorBase10Exponent === 0
		? [BigInt(integer), 0]
		: [BigInt(integer + mantissa), denominatorBase10Exponent];
};

export const splitRationalNumber = (rationalNumber) => {
	let [integer, mantissa] = rationalNumber.split(".");

	if (mantissa === undefined) mantissa = "";

	return [integer, mantissa];
};
