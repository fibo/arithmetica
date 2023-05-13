import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { inv } from "#float/operators.js";

export const invFloatThrowsRangeErrorTest = {
	message: 'throws if input is "0"',
	data: [
		{
			input: "0",
			error: {
				name: "RangeError",
			},
		},
	],
};

export const invFloatTest = {
	message: "implements inversion",
	data: [
		{
			input: "1",
			output: "1",
		},
		{
			input: "2",
			output: "0.5",
		},
	],
};

describe("inv", () => {
	it(invFloatThrowsRangeErrorTest.message, () => {
		invFloatThrowsRangeErrorTest.data.forEach(
			({ input: { a, b }, error }) => {
				assert.throws(() => {
					div(a, b);
				}, error);
			}
		);
	});

	it(invFloatTest.message, () => {
		invFloatTest.data.forEach(({ input, output }) => {
			assert.equal(inv(input), output);
		});
	});
});
