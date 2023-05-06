import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { rationalToNumber } from "../rationalToNumber.js";

describe("rationalToNumber", () => {
	it("converts a `Rational`to a `Number`", () => {
		[
			{
				input: { rational: "1", mantissaLength: 0 },
				output: 1
			},
			{
				input: { rational: "-1", mantissaLength: 0 },
				output: -1
			},
			{
				input: { rational: "1234.56789", mantissaLength: 2 },
				output: 1234.57
			},
		].forEach(({ input: { rational, mantissaLength }, output }) => {
			assert.equal(rationalToNumber(rational, mantissaLength), output)
		})
	})
})
