import { isFloat } from '../float/Float.js';
import { add as addFloat, sub as subFloat, mul as mulFloat, div as divFloat, lt as ltFloat, gt as gtFloat } from '../float/operators.js';
import { fractionToRational, splitRational, splittedRationalToFraction } from './utils.js';

export { neg } from '../float/operators.js';

export const eq = (a, b) => (a === b ? true : sub(a, b) === '0');

export const inv = (a) => div('1', a);

export const add = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return addFloat(a, b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	return fractionToRational(numeratorA * denominatorB + numeratorB * denominatorA, denominatorA * denominatorB);
};

export const sub = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return subFloat(a, b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	return fractionToRational(numeratorA * denominatorB - numeratorB * denominatorA, denominatorA * denominatorB);
};

export const mul = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return mulFloat(a, b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	return fractionToRational(numeratorA * numeratorB, denominatorA * denominatorB);
};

export const div = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return divFloat(a, b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	if (denominatorA === denominatorB) return fractionToRational(numeratorA, numeratorB);

	if (numeratorA === 1n && denominatorA === 1n) return fractionToRational(denominatorB, numeratorB);

	return fractionToRational(numeratorA * denominatorB, denominatorA * numeratorB);
};

export const lt = (a, b) => {
	if (isFloat(a) && isFloat(b)) return ltFloat(a, b);

	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	return numeratorA * denominatorB < numeratorB * denominatorA;
};

export const gt = (a, b) => {
	if (isFloat(a) && isFloat(b)) return gtFloat(a, b);

	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA);
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB);

	return numeratorA * denominatorB > numeratorB * denominatorA;
};
