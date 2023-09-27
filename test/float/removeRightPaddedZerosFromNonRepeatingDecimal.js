import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { removeRightPaddedZerosFromNonRepeatingDecimal } from "#float/utils.js";

const removeRightPaddedZerosFromNonRepeatingDecimalTest = {
	message: "removes right padded zeros",
	data: [
		{
			input: "1.2",
			output: "1.2"
		},
		{
			input: "-1.2",
			output: "-1.2"
		},
		{
			input: "1.20",
			output: "1.2"
		},
		{
			input: "12.0",
			output: "12"
		},
		{
			input: "10.10",
			output: "10.1"
		},
		{
			input: "-10.10",
			output: "-10.1"
		}
	]
};

describe("removeRightPaddedZerosFromNonRepeatingDecimal", () => {
	test(removeRightPaddedZerosFromNonRepeatingDecimalTest.message, () => {
		removeRightPaddedZerosFromNonRepeatingDecimalTest.data.forEach(
			({ input, output }) => {
				assert.equal(
					removeRightPaddedZerosFromNonRepeatingDecimal(input),
					output
				);
			}
		);
	});
});
