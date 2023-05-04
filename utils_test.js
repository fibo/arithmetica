import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import {
	denominatorBase10ExponentsToCommonDenominator,
	rationalNumberToFraction,
	splitRationalNumber,
} from "./utils.js";

describe("denominatorBase10ExponentsToCommonDenominator", () => {
	it("returns a power of 10", () => {
		[
			{
				input: {
					denominatorBase10ExponentA: 0,
					denominatorBase10ExponentB: 0,
				},
				output: 1,
			},
			{
				input: {
					denominatorBase10ExponentA: 0,
					denominatorBase10ExponentB: 1,
				},
				output: 10,
			},
			{
				input: {
					denominatorBase10ExponentA: 1,
					denominatorBase10ExponentB: 1,
				},
				output: 10,
			},
			{
				input: {
					denominatorBase10ExponentA: 2,
					denominatorBase10ExponentB: 3,
				},
				output: 1000,
			},
		].forEach(
			({
				input: {
					denominatorBase10ExponentA,
					denominatorBase10ExponentB,
				},
				output,
			}) => {
				assert.equal(
					denominatorBase10ExponentsToCommonDenominator(
						denominatorBase10ExponentA,
						denominatorBase10ExponentB
					),
					output
				);
			}
		);
	});
});

describe("rationalNumberToFraction", () => {
	it("returns numerator as BigInt and denominatorBase10Exponent as Number", () => {
		[
			{
				input: "1",
				output: {
					numerator: 1n,
					denominatorBase10Exponent: 0,
				},
			},
			{
				input: "0.1",
				output: {
					numerator: 1n,
					denominatorBase10Exponent: 1,
				},
			},
			{
				input: "0.2",
				output: {
					numerator: 2n,
					denominatorBase10Exponent: 1,
				},
			},
			{
				input: "1.2",
				output: {
					numerator: 12n,
					denominatorBase10Exponent: 1,
				},
			},
			{
				input: "-1.23",
				output: {
					numerator: -123n,
					denominatorBase10Exponent: 2,
				},
			},
		].forEach(({ input, output }) => {
			const [numerator, denominatorBase10Exponent] =
				rationalNumberToFraction(input);
			assert.equal(numerator, output.numerator);
			assert.equal(
				denominatorBase10Exponent,
				output.denominatorBase10Exponent
			);
		});
	});
});

describe("splitRationalNumber", () => {
	it("returns integer and mantissa", () => {
		[
			{
				input: "0",
				output: { integer: "0", mantissa: "" },
			},
			{
				input: "-1.1",
				output: { integer: "-1", mantissa: "1" },
			},
			{
				input: "0.1",
				output: { integer: "0", mantissa: "1" },
			},
		].forEach(({ input, output }) => {
			const [integer, mantissa] = splitRationalNumber(input);
			assert.equal(integer, output.integer);
			assert.equal(mantissa, output.mantissa);
		});
	});
});
