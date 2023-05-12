import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "#rational/operators.js";
import { addFloatTest } from "#test/float/add.js"

const addRationalTest = {
	message: "implements Rational addition",
	data: [
		{
			input: { a: "0._1", b: "0._8" },
			output: "1",
		},
		{
			input: { a: "0._1", b: "0._1" },
			output: "0._2",
		},
	]
};

describe("add", () => {
	it(addRationalTest.message, () => {
		addRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});

	it(addFloatTest.message, () => {
		addFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});



