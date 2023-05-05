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
			integerA * (
				10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)
			) + integerB, denominatorBase10ExponentB
		);
	} else {
		return fractionToRationalNumber(
			integerA + integerB * 10n ** (
				denominatorBase10ExponentA - denominatorBase10ExponentB
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
			integerA * (
				10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)
			) - integerB, denominatorBase10ExponentB
		);
	} else {
		return fractionToRationalNumber(
			integerA - integerB * 10n ** (
				denominatorBase10ExponentA - denominatorBase10ExponentB
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

export const div = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalNumberToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalNumberToFraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return fractionToRationalNumber(
			integerA / integerB,
			0n
		);
	}
}
