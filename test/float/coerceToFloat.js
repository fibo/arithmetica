import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { coerceToFloat } from "#float/Float.js";

export const coerceToFloatThrowsErrorTest = {
	message: "throws if cannot convert to Float",
	data: [
		{
			input: Infinity,
			error: {
				name: "Error"
			}
		}
	]
};

export const coerceToFloatTest = {
	message: "corces to Float",
	data: [
		{
			input: 0,
			output: "0"
		},
		{
			input: -1.23,
			output: "-1.23"
		},
		{
			input: 42,
			output: "42"
		},
		{
			input: -2n,
			output: "-2"
		}
	]
};

describe("coerceToFloat", () => {
	test(coerceToFloatThrowsErrorTest.message, () => {
		coerceToFloatThrowsErrorTest.data.forEach(({ input, error }) => {
			assert.throws(() => {
				coerceToFloat(input);
			}, error);
		});
	});

	test(coerceToFloatTest.message, () => {
		coerceToFloatTest.data.forEach(({ input, output }) => {
			assert.equal(coerceToFloat(input), output);
		});
	});
});
