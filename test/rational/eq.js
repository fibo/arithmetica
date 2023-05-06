import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "../../rational/operators.js";
import { eqTest } from "../float/eq.js"

describe("eq", () => {
	it(eqTest.message, () => {
		eqTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});
});



