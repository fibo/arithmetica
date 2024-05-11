/** A `Float` is a string that expresses a decimal representation of a number. */
export type Float = string;

/** Coerces to `Float`. */
export declare const coerceToFloat: (arg: unknown) => Float;

/** Check that given argument is a `Float`. */
export declare const isFloat: (arg: unknown) => arg is Float;

/** Converts a `Float` to a `Number`. */
export declare const floatToNumber: (floatStr: Float, mantissaLength: number) => number;
