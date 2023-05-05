import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { div } from "../../operators.js";

describe("div", () => {
	it('throws if second operand is "0"', () => {
		assert.throws(
			() => {
				div("1", "0");
			},
			{
				name: "RangeError",
			}
		)
	});

	it("implements division", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: "1",
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(div(a, b), output);
		});
	});
});

