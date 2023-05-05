import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import {
	fractionToRationalNumber,
	rationalNumberToFraction,
	removeRightPaddedZerosFromDecimalNumber,
	splitRationalNumber,
} from "../utils.js";

describe("fractionToRationalNumber", () => {
	it("adds a decimalSeparator", () => {
		[
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 0,
				},
				output: "42",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 0,
				},
				output: "-42",
			},
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 1,
				},
				output: "4.2",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 1,
				},
				output: "-4.2",
			},
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 2,
				},
				output: "0.42",
			},
			{
				input: {
					bigInt: 12345n,
					denominatorBase10Exponent: 2,
				},
				output: "123.45",
			},
			{
				input: {
					bigInt: -12345n,
					denominatorBase10Exponent: 2,
				},
				output: "-123.45",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 2,
				},
				output: "-0.42",
			},
			{
				input: {
					bigInt: 1010n,
					denominatorBase10Exponent: 2,
				},
				output: "10.1",
			},
		].forEach(
			({ input: { bigInt, denominatorBase10Exponent }, output }) => {
				assert.equal(
					fractionToRationalNumber(bigInt, denominatorBase10Exponent),
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

describe("removeRightPaddedZerosFromDecimalNumber", () => {
	it("works", () => {
		[
			{
				input: "1.2",
				output: "1.2",
			},
			{
				input: "-1.2",
				output: "-1.2",
			},
			{
				input: "1.20",
				output: "1.2",
			},
			{
				input: "12.0",
				output: "12",
			},
			{
				input: "10.10",
				output: "10.1",
			},
			{
				input: "-10.10",
				output: "-10.1",
			},
		].forEach(({ input, output }) => {
			assert.equal(
				removeRightPaddedZerosFromDecimalNumber(input),
				output
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
