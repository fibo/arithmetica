import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { sub } from "../../rational/operators.js";
import { subTest } from "../float/sub.js"

describe("sub", () => {
	it(subTest.message, () => {
		subTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(sub(a, b), output);
		});
	});
});



