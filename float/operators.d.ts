import { Float } from "./Float.js";

export type FloatBinaryOperator = (
	a: Float,
	b: Float
) => Float;

/** Equality. */
export declare const eq: FloatBinaryOperator;

/** Addition. */
export declare const add: FloatBinaryOperator;

/** Subtraction. */
export declare const sub: FloatBinaryOperator;

/** Multiplication. */
export declare const mul: FloatBinaryOperator;

/** Division. */
export declare const div: FloatBinaryOperator;
