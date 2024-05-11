/** A `Rational` includes every `Float` plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**. */
export type Rational = string;

/** Coerces to `Rational`. */
export declare const coerceToRational: (arg: unknown) => Rational;

/** Check that given argument is a `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Converts a `Rational` to a `Number`. */
export declare const rationalToNumber: (rational: Rational, mantissaLength?: number) => number;
