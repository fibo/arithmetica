import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import {
	// operators
	add,
	div,
	eq,
	inv,
	mul,
	neg,
	sub,
	// type-guards
	isFloat,
	// utils
	floatToNumber
} from "#float/index.js";

describe("arithmetica/float index", () => {
	test("exports operators", () => {
		assert.ok(typeof eq === "function");
		assert.ok(typeof neg === "function");
		assert.ok(typeof inv === "function");
		assert.ok(typeof add === "function");
		assert.ok(typeof div === "function");
		assert.ok(typeof mul === "function");
		assert.ok(typeof sub === "function");
	});

	test("exports type-guards", () => {
		assert.ok(typeof isFloat === "function");
	});

	test("exports utils", () => {
		assert.ok(typeof floatToNumber === "function");
	});
});
