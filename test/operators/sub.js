import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { sub } from "../../operators.js";

describe("sub", () => {
	it("implements subtraction", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: "0",
			},
			{
				input: { a: "1", b: "0" },
				output: "1",
			},
			{
				input: { a: "0.1", b: "0.2" },
				output: "-0.1",
			},
			{
				input: { a: "-0.1", b: "-0.2" },
				output: "0.1",
			},
			{
				input: { a: "1.23", b: "4.56" },
				output: "-3.33",
			},
			{
				input: { a: "1.2", b: "2.34" },
				output: "-1.14",
			},
			{
				input: { a: "-1.5", b: "0.5" },
				output: "-2",
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(sub(a, b), output);
		});
	});
});
