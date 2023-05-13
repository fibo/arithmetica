import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isFloat } from "#float/Float.js";

export const isStringTest = {
	message: "is a string",
	data: [
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
	],
};

export const canHaveDecimalSeparatorTest = {
	message: "can have a decimal separator",
	data: [
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
	],
};

export const canHaveMinusSignOnlyAtBeginningTest = {
	message: "can have a minus sign only at the beginning",
	data: [
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
		{
			input: "-1.0-",
			output: false,
		},
		{
			input: "-1.23-4",
			output: false,
		},
		{
			input: "1.23-4",
			output: false,
		},
		{
			input: "123-4",
			output: false,
		},
	],
};

export const cannotHaveMoreThanOneDecimalSeparatorTest = {
	message: "cannot have more than one decimal separator",
	data: [
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
	],
};

export const cannotEndWithDecimalSeparatorTest = {
	message: "cannot end with a decimal separator",
	data: [
		{
			input: "0.",
			output: false,
		},
		{
			input: "-123.",
			output: false,
		},
		{
			input: "1234.",
			output: false,
		},
	],
};

export const cannotHaveRightPaddedZerosTest = {
	message: "cannot have right padded zeros",
	data: [
		{
			input: "00.1",
			output: false,
		},
		{
			input: "-00.1",
			output: false,
		},
	],
};

export const mustHaveNumberAfterMinusSignTest = {
	message: "must have a number after minus sign",
	data: [
		{
			input: "-.1",
			output: false,
		},
		{
			input: "-.",
			output: false,
		},
	],
};

export const cannotBeMinusZeroTest = {
	message: "cannot be -0",
	data: [
		{
			input: "-0",
			output: false,
		},
	],
};

export const canOmitIntegerPartTest = {
	message: "can omit integer part",
	data: [
		{
			input: ".1",
			output: true,
		},
		{
			input: ".123",
			output: true,
		},
		{
			input: ".0",
			output: true,
		},
		{
			input: ".",
			output: false,
		},
		{
			input: "-.1",
			output: false,
		},
		{
			input: ".-1",
			output: false,
		},
	],
};

describe("Float", () => {
	it(isStringTest.message, () => {
		isStringTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});

	it(canHaveDecimalSeparatorTest.message, () => {
		canHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});

	it(cannotHaveMoreThanOneDecimalSeparatorTest.message, () => {
		cannotHaveMoreThanOneDecimalSeparatorTest.data.forEach(
			({ input, output }) => {
				assert.equal(isFloat(input), output);
			}
		);
	});

	it(canHaveDecimalSeparatorTest.message, () => {
		canHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});

	it(canHaveMinusSignOnlyAtBeginningTest.message, () => {
		canHaveMinusSignOnlyAtBeginningTest.data.forEach(
			({ input, output }) => {
				assert.equal(isFloat(input), output);
			}
		);
	});

	it(cannotHaveRightPaddedZerosTest.message, () => {
		cannotHaveRightPaddedZerosTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});

	it(mustHaveNumberAfterMinusSignTest.message, () => {
		mustHaveNumberAfterMinusSignTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});

	it(cannotBeMinusZeroTest.message, () => {
		cannotBeMinusZeroTest.data.forEach(({ input, output }) => {
			assert.equal(isFloat(input), output);
		});
	});
});
