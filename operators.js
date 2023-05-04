import { commonDenominator, rationalNumberToFraction } from "./utils.js";

export const add = (a, b) => {
	const [integerA, exponentA] = rationalNumberToFraction(a);
	const [integerB, exponentB] = rationalNumberToFraction(b);
	const denominator = commonDenominator(exponentA, exponentB);
	return exponentA + exponentB === 0
		? String(integerA + integerB)
		: String((integerA + integerB) / BigInt(denominator));
};

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;
