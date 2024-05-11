import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { lt } from "#rational/operators.js";
import { ltFloatTest } from "#test/float/lt.js";

const ltRationalTest = {
	message: 'implements Rational "less than" operator',
	data: [
		{
			input: { a: "0._8", b: "1" },
			output: true
		},
		{
			input: { a: "-0._9", b: "-1" },
			output: false
		}
	]
};

describe("lt", () => {
	test(ltRationalTest.message, () => {
		ltRationalTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(lt(a, b), output);
		});
	});

	test(ltFloatTest.message, () => {
		ltFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(lt(a, b), output);
		});
	});
});
