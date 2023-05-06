import {
	base10FractionToRational,
	integerDivision,
	rationalToFraction,
} from "./utils.js";

export const eq = (a, b) => {
	if (a === b) return true;
	return sub(a, b) === "0";
}

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalToFraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return base10FractionToRational(
			integerA + integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return base10FractionToRational(
			integerA * (
				10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)
			) + integerB, denominatorBase10ExponentB
		);
	} else {
		return base10FractionToRational(
			integerA + integerB * 10n ** (
				denominatorBase10ExponentA - denominatorBase10ExponentB
			), denominatorBase10ExponentA
		);
	}
};

export const sub = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalToFraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return base10FractionToRational(
			integerA - integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return base10FractionToRational(
			integerA * (
				10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)
			) - integerB, denominatorBase10ExponentB
		);
	} else {
		return base10FractionToRational(
			integerA - integerB * 10n ** (
				denominatorBase10ExponentA - denominatorBase10ExponentB
			), denominatorBase10ExponentA
		);
	}
}

export const mul = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalToFraction(b);
	return base10FractionToRational(
		integerA * integerB,
		denominatorBase10ExponentA + denominatorBase10ExponentB
	);
}

export const div = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = rationalToFraction(a);
	const [integerB, denominatorBase10ExponentB] = rationalToFraction(b);

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
			return base10FractionToRational(
				integerA / integerB,
				denominatorBase10ExponentA - denominatorBase10ExponentB
			);
		}  else {
			let [integer, denominatorBase10Exponent] = rationalToFraction(
				integerDivision(integerA, integerB)
			);
			return base10FractionToRational(
				integer,
				denominatorBase10Exponent + denominatorBase10ExponentA - denominatorBase10ExponentB
			)
		}
	}
}
