/** A `Rational` includes every `Float` plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**. */
export type Rational = string;

/** Coerces to `Rational`. */
export declare const coerceToRational: (arg: unknown) => Rational;

/** Check that given argument is a `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Converts a `Rational` to a `Number`. */
export declare const rationalToNumber: (rational: Rational, mantissaLen?: number) => number;

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
