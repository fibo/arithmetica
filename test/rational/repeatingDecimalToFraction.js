import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { repeatingDecimalToFraction } from "#rational/utils.js";

const repeatingDecimalToFractionTest = {
	message: "returns numerator and denominator of fraction that generates repeating decimal",
	data: [
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
	]
};

describe("repeatingDecimalToFraction", () => {
	it(repeatingDecimalToFractionTest.message, () => {
		repeatingDecimalToFractionTest.data.forEach(({
			input: {
				integer,
				decimalFixedPart,
				decimalRepeatingPart
			},
			output
		}) => {
			const [numerator, denominator] = repeatingDecimalToFraction(
				integer,
				decimalFixedPart,
				decimalRepeatingPart
			);
			assert.equal(numerator, output.numerator);
			assert.equal(denominator, output.denominator);
		});
	});
});
