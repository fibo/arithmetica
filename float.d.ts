/** A `Float` is a string that expresses a decimal representation of a number. */
export type Float = string;

/** Check that given argument is a `Float`. */
export declare function isFloat(arg: unknown): arg is Float;

/** Converts a `Float` to a `Number`. */
export declare function floatToNumber(arg: Float, mantissaLen: number): number;

/** Equality. */
export declare function eq(a: Float | number | bigint, b: Float | number | bigint): boolean;

/** Negation. */
export declare function neg(a: Float | number | bigint): Float;

/** Inversion. */
export declare function inv(a: Float | number | bigint): Float;

/** Addition. */
export declare function add(a: Float | number | bigint, b: Float | number | bigint): Float;

/** Subtraction. */
export declare function sub(a: Float | number | bigint, b: Float | number | bigint): Float;

/** Multiplication. */
export declare function mul(a: Float | number | bigint, b: Float | number | bigint): Float;

/** Division. */
export declare function div(a: Float | number | bigint, b: Float | number | bigint): Float;
