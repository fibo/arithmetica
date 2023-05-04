import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { rationalNumberToFraction } from "./utils.js";

describe("rationalNumberToFraction", () => {
	it("returns integer as BigInt and mantissa length as Number", () => {
		[
			{
				input: "1",
				output: {
					integer: 1n,
					exponent: 0,
				},
			},
		].forEach(({ input, output }) => {
			const [integer, exponent] = rationalNumberToFraction(input);
			assert.equal(integer, output.integer);
			assert.equal(exponent, output.exponent);
		});
	});
});
