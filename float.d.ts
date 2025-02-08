/** A `Float` is a number or a string that expresses a decimal representation of a number. */
export type Float = string | number | bigint;

/** Check that given argument is a `Float`. */
export declare function isFloat(arg: unknown): arg is Float;

/** Equality. */
export declare function eq(a: Float, b: Float): boolean;

/** Negation. */
export declare function neg(a: Float): Float;

/** Inversion. */
export declare function inv(a: Float): Float;

/** Addition. */
export declare function add(a: Float, b: Float): Float;

/** Subtraction. */
export declare function sub(a: Float, b: Float): Float;

/** Multiplication. */
export declare function mul(a: Float, b: Float): Float;

/** Division. */
export declare function div(a: Float, b: Float): Float;
