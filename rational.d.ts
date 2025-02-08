/** A `Rational` includes every `Float` plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**. */
export type Rational = string | number | bigint;

/** Check that given argument is a `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Converts a `Rational` to a `Number`. */
export declare const rationalToNumber: (rational: Rational, mantissaLen?: number) => number;

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
