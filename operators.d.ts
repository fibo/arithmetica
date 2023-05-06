import { Rational } from "./Rational.js";

export type RationalBinaryOperator = (
	a: Rational,
	b: Rational
) => Rational;

/** Equality. */
export declare const eq: RationalBinaryOperator;

/** Addition. */
export declare const add: RationalBinaryOperator;

/** Subtraction. */
export declare const sub: RationalBinaryOperator;

/** Multiplication. */
export declare const mul: RationalBinaryOperator;

/** Division. */
export declare const div: RationalBinaryOperator;
