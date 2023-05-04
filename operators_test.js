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
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});
