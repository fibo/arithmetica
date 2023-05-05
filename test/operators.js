import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "../operators.js";

describe("add", () => {
	it("implements addition", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: "2",
			},
			{
				input: { a: "1", b: "0" },
				output: "1",
			},
			{
				input: { a: "0.1", b: "0.2" },
				output: "0.3",
			},
			{
				input: { a: "-0.1", b: "-0.2" },
				output: "-0.3",
			},
			{
				input: { a: "1.23", b: "4.56" },
				output: "5.79",
			},
			{
				input: { a: "1.2", b: "2.34" },
				output: "3.54",
			},
			{
				input: { a: "1.5", b: "1.5" },
				output: "3",
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});
