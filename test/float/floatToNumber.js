import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { floatToNumber } from "#float/Float.js";

export const floatToNumberTest = {
	message: "converts a `Float` to a `Number`",
	data: [
		{
			input: { floatStr: "0.1", mantissaLength: 1 },
			output: 0.1,
		},
		{
			input: { floatStr: "1", mantissaLength: 0 },
			output: 1,
		},
		{
			input: { floatStr: "-1", mantissaLength: 0 },
			output: -1,
		},
		{
			input: { floatStr: "1234.56789", mantissaLength: 2 },
			output: 1234.57,
		},
	],
};

describe("floatToNumber", () => {
	it(floatToNumberTest.message, () => {
		floatToNumberTest.data.forEach(
			({ input: { floatStr, mantissaLength }, output }) => {
				assert.equal(floatToNumber(floatStr, mantissaLength), output);
			}
		);
	});
});
