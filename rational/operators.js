import {
	add as addFloat,
	sub as subFloat,
	mul as mulFloat,
	div as divFloat,
} from "../float/operators.js";
import {
	base10FractionToFloat,
	quotientToFloat,
} from "../float/utils.js";
import { floatToBase10Fraction } from "../float/utils.js";
import { splitRational } from "./utils.js";

export { neg } from "../float/operators.js";

export const eq = (a, b) => {
	if (a === b) return true;
	return sub(a, b) === "0";
}

export const add = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return addFloat(a, b);
};

export const sub = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return subFloat(a, b);
}

export const mul = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return mulFloat(a, b);
}

export const div = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a);
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b);

	if (decimalRepeatingPartA === "" && decimalRepeatingPartB === "") return divFloat(a, b);
}
