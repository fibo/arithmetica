import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { mul } from "#rational/operators.js";
import { mulFloatTest } from "#test/float/mul.js";

const mulRationalTest = {
	message: "implements Rational multiplication",
	data: [
		{
			input: { a: "0._3", b: "0.3" },
			output: "0.1"
		},
		{
			input: { a: "0._3", b: "3" },
			output: "1"
		},
		{
			input: { a: "0._1", b: "0._1" },
			output: "0._012345679"
		},
		{
			input: { a: "0._1", b: "0" },
			output: "0"
		},
		{
			input: { a: "0", b: "0._1" },
			output: "0"
		},
		{
			input: { a: "-0._1", b: "0" },
			output: "0"
		},
		{
			input: { a: "0", b: "-0._1" },
			output: "0"
		},
		{
			input: { a: "0.12_34", b: "0" },
			output: "0"
		},
		{
			input: { a: "0", b: "0.12_34" },
			output: "0"
		},
		{
			input: { a: "-0.12_34", b: "0" },
			output: "0"
		},
		{
			input: { a: "0", b: "-0.12_34" },
			output: "0"
		},

		{
			input: { a: "0._1", b: "1" },
			output: "0._1"
		},
		{
			input: { a: "1", b: "0._1" },
			output: "0._1"
		},
		{
			input: { a: "-0._1", b: "1" },
			output: "-0._1"
		},
		{
			input: { a: "1", b: "-0._1" },
			output: "-0._1"
		},
		{
			input: { a: "0.12_34", b: "1" },
			output: "0.12_34"
		},
		{
			input: { a: "1", b: "0.12_34" },
			output: "0.12_34"
		},
		{
			input: { a: "-0.12_34", b: "1" },
			output: "-0.12_34"
		},
		{
			input: { a: "1", b: "-0.12_34" },
			output: "-0.12_34"
		}
	]
};

describe("mul", () => {
	test(mulRationalTest.message, () => {
		mulRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});

	test(mulFloatTest.message, () => {
		mulFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});
});
