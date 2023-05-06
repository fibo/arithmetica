import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { quotientToFloat } from "../../float/utils.js";

const quotientToFloatThrowsTest = {
	message: 'throws if second operand is `0n`',
	data: [
		{
			input: { a: 1n, b: 0n },
			error: { name: "RangeError" }
		},
	]
};

const quotientToFloatTest = {
	message: "computes quotient of two `BigInt` and returns a `Float`",
	data: [
		{
			input: { integerA: 42n, integerB: 1n },
			output: "42"
		},
		{
			input: { integerA: 1n, integerB: 2n },
			output: "0.5"
		},
		{
			input: { integerA: 2n, integerB: 2n },
			output: "1"
		},
		{
			input: { integerA: 63n, integerB: 4n },
			output: "15.75"
		},
		{
			input: { integerA: -2n, integerB: 2n },
			output: "-1"
		},
		{
			input: { integerA: -10n, integerB: 5n },
			output: "-2"
		},
		{
			input: { integerA: -100n, integerB: -10n },
			output: "10"
		},
		{
			input: { integerA: -110n, integerB: -100n },
			output: "1.1"
		},
	]
};

describe("quotientToFloat", () => {
	it(quotientToFloatThrowsTest.message, () => {
		quotientToFloatThrowsTest.data.forEach(({ input: { a, b }, error }) => {
			assert.throws(
				() => { quotientToFloat(a, b); },
				error
			)
		})
	});

	it(quotientToFloatTest.message, () => {
		quotientToFloatTest.data.forEach(
			({ input: { integerA, integerB }, output }) => {
				assert.equal(quotientToFloat(integerA, integerB), output);
			}
		);
	});
});

