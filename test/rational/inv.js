import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { inv } from "#rational/operators.js";
import { invFloatTest, invFloatThrowsRangeErrorTest } from "#test/float/inv.js";

const invRationalTest = {
	message: "implements Rational invtiplication",
	data: [
		{
			input: "1._1",
			output: "9",
		},
	],
};

describe("inv", () => {
	it(invRationalTest.message, () => {
		invRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(inv(a, b), output);
		});
	});

	it(invFloatThrowsRangeErrorTest.message, () => {
		invFloatThrowsRangeErrorTest.data.forEach(
			({ input: { a, b }, error }) => {
				assert.throws(() => {
					div(a, b);
				}, error);
			}
		);
	});

	it(invFloatTest.message, () => {
		invFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(inv(a, b), output);
		});
	});
});
