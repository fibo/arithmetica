import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { fractionToRationalNumber } from "../../utils.js";

describe("fractionToRationalNumber", () => {
	it("adds a decimalSeparator", () => {
		[
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 0n,
				},
				output: "42",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 0n,
				},
				output: "-42",
			},
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 1n,
				},
				output: "4.2",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 1n,
				},
				output: "-4.2",
			},
			{
				input: {
					bigInt: 42n,
					denominatorBase10Exponent: 2n,
				},
				output: "0.42",
			},
			{
				input: {
					bigInt: 12345n,
					denominatorBase10Exponent: 2n,
				},
				output: "123.45",
			},
			{
				input: {
					bigInt: -12345n,
					denominatorBase10Exponent: 2n,
				},
				output: "-123.45",
			},
			{
				input: {
					bigInt: -42n,
					denominatorBase10Exponent: 2n,
				},
				output: "-0.42",
			},
			{
				input: {
					bigInt: 1010n,
					denominatorBase10Exponent: 2n,
				},
				output: "10.1",
			},
			{
				input: {
					bigInt: 2n,
					denominatorBase10Exponent: 2n,
				},
				output: "0.02",
			},
			{
				input: {
					bigInt: 1234n,
					denominatorBase10Exponent: 8n,
				},
				output: "0.00001234",
			},
			{
				input: {
					bigInt: 0n,
					denominatorBase10Exponent: 19n,
				},
				output: "0",
			},
			{
				input: {
					bigInt: -211887249607760n,
					denominatorBase10Exponent: 17n,
				},
				output: "-0.0021188724960776",
			},
		].forEach(
			({ input: { bigInt, denominatorBase10Exponent }, output }) => {
				assert.equal(fractionToRationalNumber(bigInt, denominatorBase10Exponent), output);
			}
		);
	});
});
