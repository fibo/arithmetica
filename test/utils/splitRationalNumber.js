import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { splitRationalNumber } from "../../utils.js";

describe("splitRationalNumber", () => {
	it("returns integer and mantissa", () => {
		[
			{
				input: "0",
				output: { integer: "0", mantissa: "" },
			},
			{
				input: "-1.1",
				output: { integer: "-1", mantissa: "1" },
			},
			{
				input: "0.1",
				output: { integer: "0", mantissa: "1" },
			},
		].forEach(({ input, output }) => {
			const [integer, mantissa] = splitRationalNumber(input);
			assert.equal(integer, output.integer);
			assert.equal(mantissa, output.mantissa);
		});
	});
});
