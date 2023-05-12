import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "#rational/operators.js";
import { eqFloatTest } from "#test/float/eq.js";

const eqRationalTest = {
	message: "implements Rational equality",
	data: [
		{
			input: { a: "1", b: "0._9" },
			output: true,
		},
		{
			input: { a: "1", b: "0" },
			output: false,
		},
		{
			input: { a: "-2", b: "-1._9" },
			output: true,
		},
		{
			input: { a: "0", b: "0" },
			output: true,
		},
		{
			input: { a: "1", b: "1._0" },
			output: true,
		},
		{
			input: { a: "1", b: "1.0" },
			output: true,
		},
		{
			input: { a: "2", b: "1.0" },
			output: false,
		},
		{
			input: { a: "-1", b: "-1.0" },
			output: true,
		},
		{
			input: { a: "-1.000", b: "-1.0" },
			output: true,
		},
	],
};

describe("eq", () => {
	it(eqRationalTest.message, () => {
		eqRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});

	it(eqFloatTest.message, () => {
		eqFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});
});
