import {
	fractionToRationalNumber,
	integerDivision,
	rationalNumberToFraction,
} from "./utils.js";

export const eq = (a, b) => {
	if (a === b) return true;
	return sub(a, b) === "0";
}

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

	let reminder = integerA % integerB;

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		if (reminder === 0n) {
			return String(integerA / integerB);
		}  else {
			return integerDivision(integerA, integerB);
		}
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		if (reminder === 0n) {
			return String(
				10n ** (
					denominatorBase10ExponentB - denominatorBase10ExponentA
				) * integerA / integerB
			);
		}  else {
			mul(
				integerDivision(integerA, integerB),
				String(10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA))
			);
		}
	} else {
		if (reminder === 0n) {
			return fractionToRationalNumber(
				integerA / integerB,
				denominatorBase10ExponentA - denominatorBase10ExponentB
			);
		}  else {
			let [integer, denominatorBase10Exponent] = rationalNumberToFraction(
				integerDivision(integerA, integerB)
			);
			return fractionToRationalNumber(
				integer,
				denominatorBase10Exponent + denominatorBase10ExponentA - denominatorBase10ExponentB
			)
		}
	}
}
