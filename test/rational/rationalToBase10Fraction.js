import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { rationalToBase10Fraction } from "#rational/utils.js";

const rationalToBase10FractionTest = {
	message: "returns numerator and denominatorBase10Exponent",
	data: [
		{
			input: "1",
			output: {
				numerator: 1n,
				denominatorBase10Exponent: 0n,
			},
		},
		{
			input: "0.1",
			output: {
				numerator: 1n,
				denominatorBase10Exponent: 1n,
			},
		},
		{
			input: "0.2",
			output: {
				numerator: 2n,
				denominatorBase10Exponent: 1n,
			},
		},
		{
			input: "1.2",
			output: {
				numerator: 12n,
				denominatorBase10Exponent: 1n,
			},
		},
		{
			input: "-1.23",
			output: {
				numerator: -123n,
				denominatorBase10Exponent: 2n,
			},
		},
	]
};

describe("rationalToBase10Fraction", () => {
	it(rationalToBase10FractionTest.message, () => {
		rationalToBase10FractionTest.data.forEach(({ input, output }) => {
			const [numerator, denominatorBase10Exponent] = rationalToBase10Fraction(input);
			assert.equal(numerator, output.numerator);
			assert.equal(denominatorBase10Exponent, output.denominatorBase10Exponent);
		});
	});
});
