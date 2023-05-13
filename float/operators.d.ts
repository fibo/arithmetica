import { Float } from "./Float.js";

/** Equality. */
export declare const eq: (a: Float, b: Float) => boolean;

export type FloatUnaryOperator = (a: Float) => Float;

/** Negation. */
export declare const neg: FloatUnaryOperator;

export type FloatBinaryOperator = (a: Float, b: Float) => Float;

/** Addition. */
export declare const add: FloatBinaryOperator;

/** Subtraction. */
export declare const sub: FloatBinaryOperator;

/** Multiplication. */
export declare const mul: FloatBinaryOperator;

/** Division. */
export declare const div: FloatBinaryOperator;
