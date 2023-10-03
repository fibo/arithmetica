import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { gt } from "#rational/operators.js";
import { gtFloatTest } from "#test/float/gt.js";

const gtRationalTest = {
	message: 'implements Rational "greater than" operator',
	data: [
		{
			input: { a: "0.89", b: "0._8" },
			output: true
		},
		{
			input: { a: "-1.23", b: "-1.23_1" },
			output: true
		}
	]
};

describe("gt", () => {
	test(gtRationalTest.message, () => {
		gtRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(gt(a, b), output);
		});
	});

	test(gtFloatTest.message, () => {
		gtFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(gt(a, b), output);
		});
	});
});

