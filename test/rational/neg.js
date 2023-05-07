import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { neg } from "#rational/operators.js";
import { negFloatTest } from "#test/float/neg.js"

const negRationalTest = {
	message: "implements Rational negation",
	data: []
};

describe("neg", () => {
	it(negRationalTest.message, () => {
		negRationalTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output);
		});
	});

	it(negFloatTest.message, () => {
		negFloatTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output);
		});
	});
});

