/**
 * A `Rational` is a string that expresses a decimal representation of a number.
 */
export type Rational = string;

/**
 * Check that given argument is a `Rational`.
 */
export declare const isRational: (arg: unknown) => arg is Rational;
