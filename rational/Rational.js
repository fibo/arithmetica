import { isFloat } from "../float/Float.js";
import { splitRational } from "./utils.js";

export const isRational = (arg) => {
	if (typeof arg !== "string") return false;
	if (isFloat(arg)) return true;
	return false;
};

export const rationalToNumber = (rational, mantissaLength) => {
	let [integer, decimalFixedPart, decimalRepeatingPart] =
		splitRational(rational);
	let decimalPart = decimalFixedPart;
	while (decimalPart.length < mantissaLength) {
		decimalPart += decimalRepeatingPart;
	}
	return Number(
		Number(parseFloat(integer + "." + decimalPart)).toFixed(mantissaLength)
	);
};
