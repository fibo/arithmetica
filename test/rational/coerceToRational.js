import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { coerceToRational } from "#rational/Rational.js";
import {
	coerceToFloatTest,
	coerceToFloatThrowsErrorTest
} from "#test/float/coerceToFloat.js";

const coerceToRationalTest = {
	message: "coerces to Rational",
	data: coerceToFloatTest.data
};

describe("coerceToRational", () => {
	test(coerceToFloatThrowsErrorTest.message, () => {
		coerceToFloatThrowsErrorTest.data.forEach(
			({ input: { a, b }, error }) => {
				assert.throws(() => {
					coerceToRational(a, b);
				}, error);
			}
		);
	});

	test(coerceToRationalTest.message, () => {
		coerceToRationalTest.data.forEach(({ input, output }) => {
			assert.equal(coerceToRational(input), output);
		});
	});
});
