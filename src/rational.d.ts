/**
 * A `Rational` is a string that expresses a decimal representation of a _Rational number_.
 *
 * @example
 * '-12' '1.2' '.5'
 * '0._6': the fraction 1/6, that is 0.666666666666...
 * '1.23_456': the number 1.23456456456456...
 */
export type Rational = string

/** Types that can be coerced to a `Rational`, i.e. `string`, `number` and `bigint`. */
export type MaybeRational = string | number | bigint

/** Validates the argument and converts it to `Rational`. */
export declare const coerceToRational: (arg: MaybeRational) => Rational;

/** Type guard. Checks that the given argument is a valid `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Convert a `Rational` to a number. The `numDecimals` defaults to 16. */
export declare const rationalToNumber: (arg: Rational, numDecimals?: number) => number;

/** Equality. */
export declare function eq(a: MaybeRational, b: MaybeRational): boolean;

/** Negation. */
export declare function neg(a: MaybeRational): Rational;

/** Inversion. */
export declare function inv(a: MaybeRational): Rational;

/** Addition. */
export declare function add(a: MaybeRational, b: MaybeRational): Rational;

/** Subtraction. */
export declare function sub(a: MaybeRational, b: MaybeRational): Rational;

/** Multiplication. */
export declare function mul(a: MaybeRational, b: MaybeRational): Rational;

/** Division. */
export declare function div(a: MaybeRational, b: MaybeRational): Rational;

/** Less than. */
export declare function lt(a: MaybeRational, b: MaybeRational): boolean;

/** Greater than. */
export declare function gt(a: MaybeRational, b: MaybeRational): boolean;
