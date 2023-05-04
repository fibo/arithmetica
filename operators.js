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

	if (commonDenominator === 1) return String(integerA + integerB);

	const numerator = integerA + integerB;

	if (numerator < 0) {
		return "-" + "0." + String(-numerator);
	} else {
		return "0." + String(numerator);
	}
};

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;
