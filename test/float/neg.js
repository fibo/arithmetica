import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { neg } from "#float/operators.js";

export const negFloatTest = {
	message: "implements negation",
	data: [
		{
			input: "1",
			output: "-1",
		},
		{
			input: "-42",
			output: "42",
		},
	]
};

describe("neg", () => {
	it(negFloatTest.message, () => {
		negFloatTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output);
		});
	});
});

