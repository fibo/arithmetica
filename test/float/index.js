import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import {
	// operators
	add,
	sub,
	mul,
	div,
	eq,
	neg,
	// type-guards
	isFloat,
	// utils
	floatToNumber,
} from "#float/index.js";

describe("arithmetica/float index", () => {
	it("exports operators", () => {
		assert.ok(typeof eq === "function");
		assert.ok(typeof neg === "function");
		assert.ok(typeof add === "function");
		assert.ok(typeof div === "function");
		assert.ok(typeof mul === "function");
		assert.ok(typeof sub === "function");
	});

	it("exports type-guards", () => {
		assert.ok(typeof isFloat === "function");
	});

	it("exports utils", () => {
		assert.ok(typeof floatToNumber === "function");
	});
});
