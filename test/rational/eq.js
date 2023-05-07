import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "#rational/operators.js";
import { eqFloatTest } from "#test/float/eq.js"

const eqRationalTest = {
	message: "implements Rational equality",
	data: []
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



