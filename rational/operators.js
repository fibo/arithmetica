import {
	add as addFloat,
	sub as subFloat,
	mul as mulFloat,
	div as divFloat,
} from "../float/operators.js";
import {
	splitRational,
	splittedRationalToFraction,
} from "./utils.js";

export { neg } from "../float/operators.js";

export const eq = (a, b) => {
	if (a === b) return true;
	return sub(a, b) === "0";
}

export const add = (a, b) => {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	let [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return addFloat(a, b);

	let [numeratorA, denominatorA] = splittedRationalToFraction(
		integerA,
		decimalFixedPartA,
		decimalRepeatingPartA
	);
	let [numeratorB, denominatorB] = splittedRationalToFraction(
		integerB,
		decimalFixedPartB,
		decimalRepeatingPartB
	);

	if (denominatorA === denominatorB) return divFloat(String(numeratorA + numeratorB), String(denominatorA));
};

export const sub = (a, b) => {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	let [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return subFloat(a, b);

	let [numeratorA, denominatorA] = splittedRationalToFraction(
		integerA,
		decimalFixedPartA,
		decimalRepeatingPartA
	);
	let [numeratorB, denominatorB] = splittedRationalToFraction(
		integerB,
		decimalFixedPartB,
		decimalRepeatingPartB
	);
}

export const mul = (a, b) => {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	let [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return mulFloat(a, b);

	let [numeratorA, denominatorA] = splittedRationalToFraction(
		integerA,
		decimalFixedPartA,
		decimalRepeatingPartA
	);
	let [numeratorB, denominatorB] = splittedRationalToFraction(
		integerB,
		decimalFixedPartB,
		decimalRepeatingPartB
	);
}

export const div = (a, b) => {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	let [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return divFloat(a, b);

	let [numeratorA, denominatorA] = splittedRationalToFraction(
		integerA,
		decimalFixedPartA,
		decimalRepeatingPartA
	);
	let [numeratorB, denominatorB] = splittedRationalToFraction(
		integerB,
		decimalFixedPartB,
		decimalRepeatingPartB
	);
	if (denominatorA === denominatorB) return divFloat(String(numeratorA), String(numeratorB));
}
