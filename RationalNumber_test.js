import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isRationalNumber } from "./RationalNumber.js";

describe("RationalNumber", () => {
	it("is a string", () => {
		[
			{
				input: undefined,
				output: false,
			},
			{
				input: 42,
				output: false,
			},
			{
				input: NaN,
				output: false,
			},
			{
				input: "1",
				output: true,
			},
		].forEach(({ input, output }) => {
			assert.equal(isRationalNumber(input), output);
		});
	});

	it("can have a decimal separator", () => {
		[
			{
				input: "1.01",
				output: true,
			},
			{
				input: "1.0",
				output: true,
			},
			{
				input: "-123.456789",
				output: true,
			},
		].forEach(({ input, output }) => {
			assert.equal(isRationalNumber(input), output);
		});
	});

	it("cannot have more than one decimal separator", () => {
		[
			{
				input: "-1..01",
				output: false,
			},
			{
				input: "1..0",
				output: false,
			},
			{
				input: "1.2.3",
				output: false,
			},
		].forEach(({ input, output }) => {
			assert.equal(isRationalNumber(input), output);
		});
	});

	it("can have a minus sign only at the beginning of string", () => {
		[
			{
				input: "-1",
				output: true,
			},
			{
				input: "-2.0",
				output: true,
			},
			{
				input: "1-",
				output: false,
			},
		].forEach(({ input, output }) => {
			assert.equal(isRationalNumber(input), output);
		});
	});
});
