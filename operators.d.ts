import { RationalNumber } from "./RationalNumber.js";

export type RationalNumberBinaryOperator = (
	a: RationalNumber,
	b: RationalNumber
) => RationalNumber;

/** Equality. */
export declare const eq: RationalNumberBinaryOperator;

/** Addition. */
export declare const add: RationalNumberBinaryOperator;

/** Subtraction. */
export declare const sub: RationalNumberBinaryOperator;

/** Multiplication. */
export declare const mul: RationalNumberBinaryOperator;

/** Division. */
export declare const div: RationalNumberBinaryOperator;
