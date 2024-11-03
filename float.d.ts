/** A `Float` is a string that expresses a decimal representation of a number. */
export type Float = string;

/** Coerces to `Float`. */
export declare const coerceToFloat: (arg: unknown) => Float;

/** Check that given argument is a `Float`. */
export declare const isFloat: (arg: unknown) => arg is Float;

/** Converts a `Float` to a `Number`. */
export declare const floatToNumber: (floatStr: Float, mantissaLen: number) => number;

/** Equality. */
export declare const eq: (a: Float, b: Float) => boolean;

/** Negation. */
export declare const neg: (a: Float) => Float;

/** Inversion. */
export declare const inv: (a: Float) => Float;

/** Addition. */
export declare const add: (a: Float, b: Float) => Float;

/** Subtraction. */
export declare const sub: (a: Float, b: Float) => Float;

/** Multiplication. */
export declare const mul: (a: Float, b: Float) => Float;

/** Division. */
export declare const div: (a: Float, b: Float) => Float;

/** Less than. */
export declare const lt: (a: Float, b: Float) => boolean;

/** Greater than. */
export declare const gt: (a: Float, b: Float) => boolean;
