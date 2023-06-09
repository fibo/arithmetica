import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { splittedRationalToFraction } from "#rational/utils.js";

const splittedRationalToFractionTest = {
	message:
		"returns numerator and denominator of fraction that generates repeating decimal",
	data: [
		{
			input: {
				integer: "0",
				decimalFixedPart: "",
				decimalRepeatingPart: "1",
			},
			output: {
				numerator: 1n,
				denominator: 9n,
			},
		},
		{
			input: {
				integer: "0",
				decimalFixedPart: "3",
				decimalRepeatingPart: "",
			},
			output: {
				numerator: 3n,
				denominator: 10n,
			},
		},
		{
			input: {
				integer: "0",
				decimalFixedPart: "",
				decimalRepeatingPart: "3",
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
				decimalRepeatingPart: "5",
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
				decimalRepeatingPart: "35",
			},
			output: {
				numerator: 8351n,
				denominator: 990n,
			},
		},
		{
			input: {
				integer: "42",
				decimalFixedPart: "",
				decimalRepeatingPart: "",
			},
			output: {
				numerator: 42n,
				denominator: 1n,
			},
		},
	],
};

describe("splittedRationalToFraction", () => {
	it(splittedRationalToFractionTest.message, () => {
		splittedRationalToFractionTest.data.forEach(
			({
				input: { integer, decimalFixedPart, decimalRepeatingPart },
				output,
			}) => {
				const [numerator, denominator] = splittedRationalToFraction(
					integer,
					decimalFixedPart,
					decimalRepeatingPart
				);
				assert.equal(numerator, output.numerator);
				assert.equal(denominator, output.denominator);
			}
		);
	});
});
