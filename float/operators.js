import {
	base10FractionToFloat,
	floatToBase10Fraction,
	quotientToFloat
} from "./utils.js";

export const eq = (a, b) => {
	if (a === b) return true;
	return sub(a, b) === "0";
};

export const neg = (a) => {
	if (a.charAt(0) === "-") return a.slice(1);
	return "-" + a;
};

export const inv = (a) => div("1", a);

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return base10FractionToFloat(
			integerA + integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return base10FractionToFloat(
			integerA *
				10n **
					(denominatorBase10ExponentB - denominatorBase10ExponentA) +
				integerB,
			denominatorBase10ExponentB
		);
	} else {
		return base10FractionToFloat(
			integerA +
				integerB *
					10n **
						(denominatorBase10ExponentA -
							denominatorBase10ExponentB),
			denominatorBase10ExponentA
		);
	}
};

export const sub = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		return base10FractionToFloat(
			integerA - integerB,
			denominatorBase10ExponentA
		);
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		return base10FractionToFloat(
			integerA *
				10n **
					(denominatorBase10ExponentB - denominatorBase10ExponentA) -
				integerB,
			denominatorBase10ExponentB
		);
	} else {
		return base10FractionToFloat(
			integerA -
				integerB *
					10n **
						(denominatorBase10ExponentA -
							denominatorBase10ExponentB),
			denominatorBase10ExponentA
		);
	}
};

export const mul = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);
	return base10FractionToFloat(
		integerA * integerB,
		denominatorBase10ExponentA + denominatorBase10ExponentB
	);
};

export const div = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	const reminder = integerA % integerB;

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) {
		if (reminder === 0n) {
			return String(integerA / integerB);
		} else {
			return quotientToFloat(integerA, integerB);
		}
	}

	if (denominatorBase10ExponentA < denominatorBase10ExponentB) {
		if (reminder === 0n) {
			return String(
				(10n **
					(denominatorBase10ExponentB - denominatorBase10ExponentA) *
					integerA) /
					integerB
			);
		} else {
			mul(
				quotientToFloat(integerA, integerB),
				String(
					10n **
						(denominatorBase10ExponentB -
							denominatorBase10ExponentA)
				)
			);
		}
	} else {
		if (reminder === 0n) {
			return base10FractionToFloat(
				integerA / integerB,
				denominatorBase10ExponentA - denominatorBase10ExponentB
			);
		} else {
			const [integer, denominatorBase10Exponent] = floatToBase10Fraction(
				quotientToFloat(integerA, integerB)
			);
			return base10FractionToFloat(
				integer,
				denominatorBase10Exponent +
					denominatorBase10ExponentA -
					denominatorBase10ExponentB
			);
		}
	}
};

export const lt = (a, b) => {
	return parseFloat(a) < parseFloat(b)
}

export const gt = (a, b) => {
	return parseFloat(a) > parseFloat(b)
}
