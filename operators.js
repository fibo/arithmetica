import { fractionToRationalNumber, rationalNumberToFraction } from "./utils.js";

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalNumberToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalNumberToFraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return fractionToRationalNumber(
			integerA + integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return fractionToRationalNumber(
			integerA * BigInt(
				Math.pow( 10, denominatorBase10ExponentB - denominatorBase10ExponentA)
			) + integerB, denominatorBase10ExponentB
		);
	} else {
		return fractionToRationalNumber(
			integerA + integerB * BigInt(
				Math.pow( 10, denominatorBase10ExponentA - denominatorBase10ExponentB)
			), denominatorBase10ExponentA
		);
	}
};

export const sub = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalNumberToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalNumberToFraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return fractionToRationalNumber(
			integerA - integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return fractionToRationalNumber(
			integerA * BigInt(
				Math.pow( 10, denominatorBase10ExponentB - denominatorBase10ExponentA)
			) - integerB, denominatorBase10ExponentB
		);
	} else {
		return fractionToRationalNumber(
			integerA - integerB * BigInt(
				Math.pow( 10, denominatorBase10ExponentA - denominatorBase10ExponentB)
			), denominatorBase10ExponentA
		);
	}
}

export const mul = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalNumberToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalNumberToFraction(b);

	return fractionToRationalNumber(
		integerA * integerB,
		denominatorBase10ExponentA + denominatorBase10ExponentB
	);
}

export const div = (a, b) => a / b;
