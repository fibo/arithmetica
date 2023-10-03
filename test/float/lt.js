import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { lt } from "#float/operators.js";

export const ltFloatTest = {
	message: 'implements Float "less than" operator',
	data: [
		{
			input: { a: "1", b: "1" },
			output: false
		},
		{
			input: { a: "-2", b: "1" },
			output: true
		},
		{
			input: { a: "2.5", b: "-5.2" },
			output: false
		},
	]
};

describe("lt", () => {
	test(ltFloatTest.message, () => {
		ltFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(lt(a, b), output);
		});
	});
});

