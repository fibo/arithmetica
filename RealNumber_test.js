import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isRealNumber } from "./realNumbers.js";

describe("RealNumber", () => {
	it("is a string", () => {
		[
			{
				input: undefined,
				output: false,
			},
			{
				input: 42,
				output: false,
			},
			{
				input: NaN,
				output: false,
			},
			{
				input: "1",
				output: true,
			},
		].forEach(({ input, output }) => {
			assert.equal(isRealNumber(input), output);
		});
	});
});
