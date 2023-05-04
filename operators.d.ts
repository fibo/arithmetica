import { RealNumber } from "./RealNumber.js";
export type RealNumberBinaryOperator = (
  a: RealNumber,
  b: RealNumber
) => RealNumber;
export declare const add: RealNumberBinaryOperator;
export declare const sub: RealNumberBinaryOperator;
export declare const mul: RealNumberBinaryOperator;
export declare const div: RealNumberBinaryOperator;

