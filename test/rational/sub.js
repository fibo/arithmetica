import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { sub } from "#rational/operators.js";
import { subFloatTest } from "#test/float/sub.js"

const subRationalTest = {
	message: "implements Rational subtraction",
	data: []
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



