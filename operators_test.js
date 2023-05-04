import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "./operators.js";

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
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});
