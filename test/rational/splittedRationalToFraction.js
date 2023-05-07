import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { splittedRationalToFraction } from "#rational/utils.js";

const splittedRationalToFractionTest = {
	message: "returns numerator and denominator of fraction that generates repeating decimal",
	data: [
		{
			input: {
				integer: "0",
				decimalFixedPart: "",
				decimalRepeatingPart: "3"
			},
			output: {
				numerator: 3n,
				denominator: 9n,
			},
		},
		{
			input: {
				integer: "8",
				decimalFixedPart: "",
				decimalRepeatingPart: "5"
			},
			output: {
				numerator: 77n,
				denominator: 9n,
			},
		},
		{
			input: {
				integer: "8",
				decimalFixedPart: "4",
				decimalRepeatingPart: "35"
			},
			output: {
				numerator: 8351n,
				denominator: 990n,
			},
		},
	]
};

describe("splittedRationalToFraction", () => {
	it(splittedRationalToFractionTest.message, () => {
		splittedRationalToFractionTest.data.forEach(({
			input: {
				integer,
				decimalFixedPart,
				decimalRepeatingPart
			},
			output
		}) => {
			const [numerator, denominator] = splittedRationalToFraction(
				integer,
				decimalFixedPart,
				decimalRepeatingPart
			);
			assert.equal(numerator, output.numerator);
			assert.equal(denominator, output.denominator);
		});
	});
});
