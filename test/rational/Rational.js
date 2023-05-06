import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isRational } from "../../rational/Rational.js";
import {
	canHaveDecimalSeparatorTest,
	canHaveMinusSignOnlyAtBeginningTest,
	cannotBeMinusZeroTest,
	cannotHaveMoreThanOneDecimalSeparatorTest,
	cannotHaveRightPaddedZerosTest,
	isStringTest,
	mustHaveNumberAfterMinusSignTest
} from "../float/Float.js"

describe("Rational", () => {
	it(isStringTest.message, () => {
		isStringTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(canHaveDecimalSeparatorTest.message, () => {
		canHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(cannotHaveMoreThanOneDecimalSeparatorTest.message, () => {
		cannotHaveMoreThanOneDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(canHaveDecimalSeparatorTest.message, () => {
		canHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(canHaveMinusSignOnlyAtBeginningTest.message, () => {
		canHaveMinusSignOnlyAtBeginningTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(cannotHaveRightPaddedZerosTest.message, () => {
		cannotHaveRightPaddedZerosTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(mustHaveNumberAfterMinusSignTest.message, () => {
		mustHaveNumberAfterMinusSignTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(cannotBeMinusZeroTest.message, () => {
		cannotBeMinusZeroTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});
});
