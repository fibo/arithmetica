import { RationalNumber } from "./RationalNumber.js";
export type RationalNumberBinaryOperator = (
	a: RationalNumber,
	b: RationalNumber
) => RationalNumber;
export declare const add: RationalNumberBinaryOperator;
export declare const sub: RationalNumberBinaryOperator;
export declare const mul: RationalNumberBinaryOperator;
export declare const div: RationalNumberBinaryOperator;
