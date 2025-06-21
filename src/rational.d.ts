/**
 * A `Rational` is a finite number or a string that expresses a decimal representation of a number.
 *
 * @example
 * 1 2.5 42 -273
 * 10n // bigint
 * '-12' '1.2' '.5'
 * '0._3' // 1 / 3 that is 0.33333333...
 */
export type Rational = string | number | bigint;

/** Type guard. Check that given argument is a `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Convert a `Rational` to number. The `numDecimals` defaults to 16. */
export declare const rationalToNumber: (arg: Rational, numDecimals?: number) => number;

/** Equality. */
export declare function eq(a: Rational, b: Rational): boolean;

/** Negation. */
export declare function neg(a: Rational): Rational;

/** Inversion. */
export declare function inv(a: Rational): Rational;

/** Addition. */
export declare function add(a: Rational, b: Rational): Rational;

/** Subtraction. */
export declare function sub(a: Rational, b: Rational): Rational;

/** Multiplication. */
export declare function mul(a: Rational, b: Rational): Rational;

/** Division. */
export declare function div(a: Rational, b: Rational): Rational;

/** Less than. */
export declare function lt(a: Rational, b: Rational): boolean;

/** Greater than. */
export declare function gt(a: Rational, b: Rational): boolean;
