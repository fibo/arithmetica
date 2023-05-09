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
			output: '1',
		},
		{
			input: {
				numerator: 8n,
				denominator: -2n,
			},
			output: '-4',
		},
		{
			input: {
				numerator: 5n,
				denominator: 10n,
			},
			output: '0.5',
		},
	]
};

describe("fractionToRational", () => {
	it(fractionToRationalTest.message, () => {
		fractionToRationalTest.data.forEach(({ input: { numerator, denominator }, output }) => {
			const rational = fractionToRational(numerator, denominator);
			assert.equal(rational, output);
		});
	});
});

