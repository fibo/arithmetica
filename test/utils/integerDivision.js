import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { integerDivision } from "../../utils.js";

describe("integerDivision", () => {
	it('throws if second operand is `0n`', () => {
		assert.throws(
			() => {
				integerDivision(1n, 0n);
			},
			{
				name: "RangeError",
			}
		)
	});

	it("computes quotient of two `BigInt` and returns a `RationalNumber`", () => {
		[
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
		].forEach(
			({ input: { integerA, integerB }, output }) => {
				assert.equal(integerDivision(integerA, integerB), output);
			}
		);
	});
});

