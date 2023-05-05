import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { eq } from "../../operators.js";

describe("eq", () => {
	it("implements equality", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: true,
			},
			{
				input: { a: "1.0", b: "1" },
				output: true,
			},
			{
				input: { a: "-1.2", b: "-1.20" },
				output: true,
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(eq(a, b), output);
		});
	});
});


