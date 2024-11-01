import { Rational } from './Rational.js';

/** Equality. */
export declare const eq: (a: Rational, b: Rational) => boolean;

/** Negation. */
export declare const neg: (a: Rational) => Rational;

/** Inversion. */
export declare const inv: (a: Rational) => Rational;

/** Addition. */
export declare const add: (a: Rational, b: Rational) => Rational;

/** Subtraction. */
export declare const sub: (a: Rational, b: Rational) => Rational;

/** Multiplication. */
export declare const mul: (a: Rational, b: Rational) => Rational;

/** Division. */
export declare const div: (a: Rational, b: Rational) => Rational;

/** Less than. */
export declare const lt: (a: Rational, b: Rational) => boolean;

/** Greater than. */
export declare const gt: (a: Rational, b: Rational) => boolean;
