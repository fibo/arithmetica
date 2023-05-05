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
			{
				input: { a: "-10", b: "2" },
				output: "-5",
			},
			{
				input: { a: "144", b: "12" },
				output: "12",
			},
			{
				input: { a: "14.4", b: "1.2" },
				output: "12",
			},
			{
				input: { a: "100.0", b: "2.0" },
				output: "50",
			},
			{
				input: { a: "1", b: "2" },
				output: "0.5",
			},
			{
				input: { a: "3", b: "2" },
				output: "1.5",
			},
			{
				input: { a: "234", b: "25" },
				output: "9.36",
			},
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(div(a, b), output);
		});
	});
});

