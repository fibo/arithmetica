import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { mul } from "#rational/operators.js";
import { mulFloatTest } from "#test/float/mul.js"

const mulRationalTest = {
	message: "implements Rational multiplication",
	data: [
		{
			input: { a: "0._3", b: "0.3" },
			output: "0.1",
		},
		{
			input: { a: "0._3", b: "3" },
			output: "1",
		},
		// {
		// 	input: { a: "0._1", b: "0._1" },
		// 	output: "0._2",
		// },
	]
};

describe("mul", () => {
	it(mulRationalTest.message, () => {
		mulRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});

	it(mulFloatTest.message, () => {
		mulFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});
});
