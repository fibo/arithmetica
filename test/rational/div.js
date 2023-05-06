import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { div } from "../../rational/operators.js";
import { divTest, divThrowsRangeErrorTest } from "../float/div.js"

// TODO are these periodic numbers?
// {
// 	input: { a: "43534.5435", b: "0.054645" },
// 	output: "796679.3576722481471314850398023606917375789185",
// },
// {
// 	input: { a: "1", b: "6.1915" },
// 	output: "0.1615117499798110312525236210934345473633",
// },

describe("div", () => {
	it(divThrowsRangeErrorTest.message, () => {
		divThrowsRangeErrorTest.data.forEach(({ input: { a, b }, error }) => {
			assert.throws(
				() => { div(a, b); },
				error
			)
		})
	});

	it(divTest.message, () => {
		divTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(div(a, b), output);
		});
	});
});


