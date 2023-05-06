import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "../../float/operators.js";

export const eqTest = {
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
			input: { a: "42", b: "42.0" },
			output: true,
		},
		{
			input: { a: "-1.2", b: "-1.20" },
			output: true,
		},
	]
};

describe("eq", () => {
	it(eqTest.message, () => {
		eqTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});
});


