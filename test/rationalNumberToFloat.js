import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { rationalNumberToFloat } from "../rationalNumberToFloat.js";

describe("rationalNumberToFloat", () => {
	it("converts a RationalNumber to floating point number", () => {
		[
			{
				input: { rationalNumber: "1", mantissaLength: 0 },
				output: 1
			},
			{
				input: { rationalNumber: "-1", mantissaLength: 0 },
				output: -1
			},
			{
				input: { rationalNumber: "1234.56789", mantissaLength: 2 },
				output: 1234.57
			},
		].forEach(({ input: { rationalNumber, mantissaLength }, output }) => {
			assert.equal(rationalNumberToFloat(rationalNumber, mantissaLength), output)
		})
	})
})
