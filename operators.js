import {
	denominatorBase10ExponentsToCommonDenominator,
	rationalNumberToFraction,
} from "./utils.js";

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalNumberToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalNumberToFraction(b);

	const commonDenominator = denominatorBase10ExponentsToCommonDenominator(
		denominatorBase10ExponentA,
		denominatorBase10ExponentB
	);

	if (commonDenominator == 1) return String(integerA + integerB);

	return "0." + String(integerA + integerB);
};

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;
