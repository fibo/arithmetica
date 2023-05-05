import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { mul } from "../../operators.js";

describe("mul", () => {
	it("implements multiplication", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: "1",
			},
			{
				input: { a: "1", b: "0" },
				output: "0",
			},
			{
				input: { a: "0.1", b: "0.2" },
				output: "0.02",
			},
			{
				input: { a: "-0.1", b: "-0.2" },
				output: "0.02",
			},
			{
				input: { a: "1.23", b: "4.56" },
				output: "5.6088",
			},
			{
				input: { a: "1.2", b: "2.34" },
				output: "2.808",
			},
			{
				input: { a: "1.5", b: "1.5" },
				output: "2.25",
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(mul(a, b), output);
		});
	});
});
