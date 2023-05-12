import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { rationalToNumber } from "#rational/Rational.js";
import { floatToNumberTest } from "#test/float/floatToNumber.js";

const rationalToNumberTest = {
	message: "converts a `Rational` to a `Number`",
	data: [
		{
			input: { rational: "0.1", mantissaLength: 1 },
			output: 0.1
		},
		{
			input: { rational: "0._3", mantissaLength: 8 },
			output: 0.33333333
		},
	]
};

describe("rationalToNumber", () => {
	it(rationalToNumberTest.message, () => {
		rationalToNumberTest.data.forEach(({ input: { rational, mantissaLength }, output }) => {
			assert.equal(rationalToNumber(rational, mantissaLength), output)
		});
	});

	it(floatToNumberTest.message, () => {
		floatToNumberTest.data.forEach(({ input: { floatStr, mantissaLength }, output }) => {
			assert.equal(rationalToNumber(floatStr, mantissaLength), output)
		});
	});
})
