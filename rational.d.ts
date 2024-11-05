/** A `Rational` includes every `Float` plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**. */
export type Rational = string;

/** Check that given argument is a `Rational`. */
export declare const isRational: (arg: unknown) => arg is Rational;

/** Converts a `Rational` to a `Number`. */
export declare const rationalToNumber: (rational: Rational, mantissaLen?: number) => number;

/** Equality. */
export declare function eq(a: Rational | number | bigint, b: Rational | number | bigint): boolean;

/** Negation. */
export declare function neg(a: Rational | number | bigint): Rational;

/** Inversion. */
export declare function inv(a: Rational | number | bigint): Rational;

/** Addition. */
export declare function add(a: Rational | number | bigint, b: Rational | number | bigint): Rational;

/** Subtraction. */
export declare function sub(a: Rational | number | bigint, b: Rational | number | bigint): Rational;

/** Multiplication. */
export declare function mul(a: Rational | number | bigint, b: Rational | number | bigint): Rational;

/** Division. */
export declare function div(a: Rational | number | bigint, b: Rational | number | bigint): Rational;

/** Less than. */
export declare function lt(a: Rational | number | bigint, b: Rational | number | bigint): boolean;

/** Greater than. */
export declare function gt(a: Rational | number | bigint, b: Rational | number | bigint): boolean;
