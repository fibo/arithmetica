import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "../../rational/operators.js";
import { addTest } from "../float/add.js"

describe("add", () => {
	it(addTest.message, () => {
		addTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});



