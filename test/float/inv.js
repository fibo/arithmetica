import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { inv } from "#float/operators.js";

export const invFloatThrowsRangeErrorTest = {
	message: 'throws if input is "0"',
	data: [
		{
			input: "0",
			error: {
				name: "RangeError"
			}
		}
	]
};

export const invFloatTest = {
	message: "implements Float inversion operator",
	data: [
		{
			input: "1",
			output: "1"
		},
		{
			input: "2",
			output: "0.5"
		}
	]
};

describe("inv", () => {
	test(invFloatThrowsRangeErrorTest.message, () => {
		invFloatThrowsRangeErrorTest.data.forEach(({ input, error }) => {
			assert.throws(() => {
				inv(input);
			}, error);
		});
	});

	test(invFloatTest.message, () => {
		invFloatTest.data.forEach(({ input, output }) => {
			assert.equal(inv(input), output);
		});
	});
});
