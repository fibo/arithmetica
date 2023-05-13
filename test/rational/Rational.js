import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isRational } from "#rational/Rational.js";
import {
	canHaveDecimalSeparatorTest as floatCanHaveDecimalSeparatorTest,
	canHaveMinusSignOnlyAtBeginningTest as floatCanHaveMinusSignOnlyAtBeginningTest,
	cannotBeMinusZeroTest as floatCannotBeMinusZeroTest,
	cannotHaveMoreThanOneDecimalSeparatorTest as floatCannotHaveMoreThanOneDecimalSeparatorTest,
	cannotHaveRightPaddedZerosTest as floatCannotHaveRightPaddedZerosTest,
	isStringTest as floatIsStringTest,
	mustHaveNumberAfterMinusSignTest as floatMustHaveNumberAfterMinusSignTest,
} from "#test/float/Float.js";

const canHaveDecimalRepeatingPartTest = {
	message: "can have decimal repeating part",
	data: [
		{
			input: "1._1",
			output: true
		}
	]
};

describe("Rational", () => {
	it(floatIsStringTest.message, () => {
		floatIsStringTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(floatCanHaveDecimalSeparatorTest.message, () => {
		floatCanHaveDecimalSeparatorTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(floatCannotHaveMoreThanOneDecimalSeparatorTest.message, () => {
		floatCannotHaveMoreThanOneDecimalSeparatorTest.data.forEach(
			({ input, output }) => {
				assert.equal(isRational(input), output);
			}
		);
	});

	it(floatCanHaveMinusSignOnlyAtBeginningTest.message, () => {
		floatCanHaveMinusSignOnlyAtBeginningTest.data.forEach(
			({ input, output }) => {
				assert.equal(isRational(input), output);
			}
		);
	});

	it(floatCannotHaveRightPaddedZerosTest.message, () => {
		floatCannotHaveRightPaddedZerosTest.data.forEach(
			({ input, output }) => {
				assert.equal(isRational(input), output);
			}
		);
	});

	it(floatMustHaveNumberAfterMinusSignTest.message, () => {
		floatMustHaveNumberAfterMinusSignTest.data.forEach(
			({ input, output }) => {
				assert.equal(isRational(input), output);
			}
		);
	});

	it(floatCannotBeMinusZeroTest.message, () => {
		floatCannotBeMinusZeroTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});

	it(canHaveDecimalRepeatingPartTest.message, () => {
		canHaveDecimalRepeatingPartTest.data.forEach(({ input, output }) => {
			assert.equal(isRational(input), output);
		});
	});
});
