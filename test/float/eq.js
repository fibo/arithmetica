import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "#float/operators.js";

export const eqFloatTest = {
	message: "implements equality",
	data: [
		{
			input: { a: "1", b: "1" },
			output: true,
		},
		{
			input: { a: "1", b: "2" },
			output: false,
		},
		{
			input: { a: "1.0", b: "1" },
			output: true,
		},
		{
			input: { a: "123.4500", b: "123.45" },
			output: true,
		},
		{
			input: { a: "42", b: "42.0" },
			output: true,
		},
		{
			input: { a: "-1.2", b: "-1.20" },
			output: true,
		},
		{
			input: { a: "1.000000000000001", b: "1.000" },
			output: false,
		},
	],
};

describe("eq", () => {
	it(eqFloatTest.message, () => {
		eqFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});
});
