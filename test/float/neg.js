import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { neg } from "#float/operators.js";

export const negFloatTest = {
	message: "implements Float negation",
	data: [
		{
			input: "1",
			output: "-1"
		},
		{
			input: "-42",
			output: "42"
		}
	]
};

describe("neg", () => {
	test(negFloatTest.message, () => {
		negFloatTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output);
		});
	});
});
