export const rationalToBase10Fraction = (rational) => {
	let [integer, mantissa] = rational.split(".");
	if (mantissa === undefined) return [BigInt(integer), 0n];
	// TODO split mantissa into periodic part
	// let [fixed, periodic] = mantissa.split("_")
	return [BigInt(integer + mantissa), BigInt(mantissa.length)];
};
