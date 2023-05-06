import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { mul } from "../../rational/operators.js";
import { mulTest } from "../float/mul.js"

describe("mul", () => {
	it(mulTest.message, () => {
		mulTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});
});



