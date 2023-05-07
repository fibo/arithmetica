import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { splitRational } from "#rational/utils.js";

const splitRationalTest = {
	message: "returns integer, decimalFixedPart and decimalRepeatingPart",
	data: [
		{
			input: "1.2_3",
			output: {
				integer: "1",
				decimalFixedPart: "2",
				decimalRepeatingPart: "3"
			},
		},
		{
			input: "8._5",
			output: {
				integer: "8",
				decimalFixedPart: "",
				decimalRepeatingPart: "5"
			},
		},
		{
			input: "-1.2_3",
			output: {
				integer: "-1",
				decimalFixedPart: "2",
				decimalRepeatingPart: "3"
			},
		},
	]
};

describe("splitRational", () => {
	it(splitRationalTest.message, () => {
		splitRationalTest.data.forEach(({ input, output }) => {
			const [
				integer,
				decimalFixedPart,
				decimalRepeatingPart
			] = splitRational(input);
			assert.equal(integer, output.integer);
			assert.equal(decimalFixedPart, output.decimalFixedPart);
			assert.equal(decimalRepeatingPart, output.decimalRepeatingPart);
		});
	});
});
