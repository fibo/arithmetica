import { isFloat } from "../float/Float.js";
import { splitRational } from "./utils.js";

export const isRational = (arg) => {
	if (typeof arg !== "string") return false;
	let [_, __, decimalRepeatingPart] = splitRational(arg);
	if (decimalRepeatingPart === "") return isFloat(arg)
	try {
		if (BigInt(decimalRepeatingPart) < 0) return false
		return true;
	} catch (ignore) {
		return false;
	}
};

export const rationalToNumber = (rational, mantissaLength = 16) => {
	let [integer, decimalFixedPart, decimalRepeatingPart] = splitRational(rational);
	let decimalPart = decimalFixedPart;
	if (decimalRepeatingPart !== "") while (true) {
		decimalPart += decimalRepeatingPart;
		if (decimalPart.length >= mantissaLength) break;
	}
	return Number(Number(parseFloat(integer + "." + decimalPart)).toFixed(mantissaLength));
};
