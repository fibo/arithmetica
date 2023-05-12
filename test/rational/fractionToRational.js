import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { fractionToRational } from "#rational/utils.js";

const fractionToRationalTest = {
	message: "converts numerator and denominator into Rational",
	data: [
		{
			input: {
				numerator: 1n,
				denominator: 1n,
			},
			output: "1",
		},
		{
			input: {
				numerator: 8n,
				denominator: -2n,
			},
			output: "-4",
		},
		{
			input: {
				numerator: 5n,
				denominator: 10n,
			},
			output: "0.5",
		},
		{
			input: {
				numerator: 0n,
				denominator: 1n,
			},
			output: "0",
		},
		{
			input: {
				numerator: 1n,
				denominator: 9n,
			},
			output: "0._1",
		},
		{
			input: {
				numerator: -1n,
				denominator: -9n,
			},
			output: "0._1",
		},
		{
			input: {
				numerator: -1n,
				denominator: 9n,
			},
			output: "-0._1",
		},
		{
			input: {
				numerator: 1n,
				denominator: -9n,
			},
			output: "-0._1",
		},
		{
			input: {
				numerator: 3n,
				denominator: 7n,
			},
			output: "0._428571",
		},
		{
			input: {
				numerator: -5n,
				denominator: 3n,
			},
			output: "-1._6",
		},
	],
};

describe("fractionToRational", () => {
	it(fractionToRationalTest.message, () => {
		fractionToRationalTest.data.forEach(
			({ input: { numerator, denominator }, output }) => {
				const rational = fractionToRational(numerator, denominator);
				assert.equal(rational, output);
			}
		);
	});
});
