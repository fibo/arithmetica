import { base10FractionToFloat, floatToBase10Fraction, quotientToFloat } from './utils.js';

export const eq = (a, b) => (a === b ? true : sub(a, b) === '0');

export const neg = (a) => (a.charAt(0) === '-' ? a.slice(1) : '-' + a);

export const inv = (a) => div('1', a);

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return base10FractionToFloat(integerA + integerB, denominatorBase10ExponentA);

	return denominatorBase10ExponentA < denominatorBase10ExponentB
		? base10FractionToFloat(integerA * 10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) + integerB, denominatorBase10ExponentB)
		: base10FractionToFloat(integerA + integerB * 10n ** (denominatorBase10ExponentA - denominatorBase10ExponentB), denominatorBase10ExponentA);
};

export const sub = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return base10FractionToFloat(integerA - integerB, denominatorBase10ExponentA);

	return denominatorBase10ExponentA < denominatorBase10ExponentB
		? base10FractionToFloat(integerA * 10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) - integerB, denominatorBase10ExponentB)
		: base10FractionToFloat(integerA - integerB * 10n ** (denominatorBase10ExponentA - denominatorBase10ExponentB), denominatorBase10ExponentA);
};

export const mul = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);
	return base10FractionToFloat(integerA * integerB, denominatorBase10ExponentA + denominatorBase10ExponentB);
};

export const div = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a);
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b);

	const reminder = integerA % integerB;

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return reminder === 0n ? String(integerA / integerB) : quotientToFloat(integerA, integerB);

	if (denominatorBase10ExponentA < denominatorBase10ExponentB)
		return reminder === 0n
			? String((10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) * integerA) / integerB)
			: mul(quotientToFloat(integerA, integerB), String(10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)));

	if (reminder === 0n) return base10FractionToFloat(integerA / integerB, denominatorBase10ExponentA - denominatorBase10ExponentB);

	const [integer, denominatorBase10Exponent] = floatToBase10Fraction(quotientToFloat(integerA, integerB));
	return base10FractionToFloat(integer, denominatorBase10Exponent + denominatorBase10ExponentA - denominatorBase10ExponentB);
};

export const lt = (a, b) => parseFloat(a) < parseFloat(b);

export const gt = (a, b) => parseFloat(a) > parseFloat(b);
