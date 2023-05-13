import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { sub } from "#rational/operators.js";
import { subFloatTest } from "#test/float/sub.js";

const subRationalTest = {
	message: "implements Rational subtraction",
	data: [
		{
			input: { a: "0._1", b: "0._1" },
			output: "0",
		},
		{
			input: { a: "1", b: "0._1" },
			output: "0._8",
		},
	],
};

describe("sub", () => {
	it(subRationalTest.message, () => {
		subRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(sub(a, b), output);
		});
	});

	it(subFloatTest.message, () => {
		subFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(sub(a, b), output);
		});
	});
});
