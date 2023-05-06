import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add, mul, div, eq, sub, isFloat, isRational } from "../index.js"

describe("arithmetica index", () => {
	it("exports operators", () => {
		assert.ok(typeof add === "function");
		assert.ok(typeof div === "function");
		assert.ok(typeof mul === "function");
		assert.ok(typeof eq === "function");
		assert.ok(typeof sub === "function");
	});

	it("exports type-guards", () => {
		assert.ok(typeof isFloat === "function");
		assert.ok(typeof isRational === "function");
	});
})
