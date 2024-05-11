import { strict as assert } from "node:assert";
import { describe, test } from "node:test";
import { isRational } from "#rational/Rational.js";
import {
	canHaveDecimalSeparatorTest as floatCanHaveDecimalSeparatorTest,
	canHaveMinusSignOnlyAtBeginningTest as floatCanHaveMinusSignOnlyAtBeginningTest,
	canOmitIntegerPartTest as floatCanOmitIntegerPartTest,
	cannotBeMinusZeroTest as floatCannotBeMinusZeroTest,
	cannotHaveMoreThanOneDecimalSeparatorTest as floatCannotHaveMoreThanOneDecimalSeparatorTest,
	cannotHaveRightPaddedZerosTest as floatCannotHaveRightPaddedZerosTest,
	isStringTest as floatIsStringTest,
	mustHaveNumberAfterMinusSignTest as floatMustHaveNumberAfterMinusSignTest
} from "#test/float/Float.js";

const canHaveDecimalRepeatingPartTest = {
	message: "can have decimal repeating part",
	data: [
		{
			input: "1._1",
			output: true
		},
		{
			input: "._1",
			output: true
		},
		{
			input: "0.12_34",
			output: true
		},
		{
			input: ".12_34",
			output: true
		},
		{
			input: "1.2_3",
			output: true
		}
	]
};

describe("Rational", () => {
	test(floatIsStringTest.message, () => {
		floatIsStringTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCanHaveDecimalSeparatorTest.message, () => {
		floatCanHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCannotHaveMoreThanOneDecimalSeparatorTest.message, () => {
		floatCannotHaveMoreThanOneDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCanHaveMinusSignOnlyAtBeginningTest.message, () => {
		floatCanHaveMinusSignOnlyAtBeginningTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCanOmitIntegerPartTest.message, () => {
		floatCanOmitIntegerPartTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCannotHaveRightPaddedZerosTest.message, () => {
		floatCannotHaveRightPaddedZerosTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatMustHaveNumberAfterMinusSignTest.message, () => {
		floatMustHaveNumberAfterMinusSignTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(floatCannotBeMinusZeroTest.message, () => {
		floatCannotBeMinusZeroTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	test(canHaveDecimalRepeatingPartTest.message, () => {
		canHaveDecimalRepeatingPartTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});
});
