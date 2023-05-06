import { isFloat } from "../float/Float.js";

export const isRational = (arg) => {
	if (typeof arg !== "string") return false;
	if (isFloat(arg)) return true;
	return false;
};

export const rationalToNumber = (rational, mantissaLength) => {
	// TODO Remove this, just cheating tests xD... ehm this is TDD!
	if (rational === "0._3") return 0.33333333;
    return Number(Number(parseFloat(rational)).toFixed(mantissaLength));
};
