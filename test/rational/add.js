import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "../../rational/operators.js";
import { addFloatTest } from "../float/add.js"

const addRationalTest = {
	message: "implements Rational addition",
	data: []
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



