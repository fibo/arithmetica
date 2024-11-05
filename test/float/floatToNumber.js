import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import { floatToNumber } from '#src/float.js'

export const floatToNumberTest = {
	message: 'converts a Float to a Number',
	data: [
		{
			input: { floatStr: '0.1', mantissaLength: 1 },
			output: 0.1
		},
		{
			input: { floatStr: '1', mantissaLength: 0 },
			output: 1
		},
		{
			input: { floatStr: '-1', mantissaLength: 0 },
			output: -1
		},
		{
			input: { floatStr: '1234.56789', mantissaLength: 2 },
			output: 1234.57
		},
		{
			input: { floatStr: '-1234.56789', mantissaLength: 3 },
			output: -1234.568
		}
	]
}

describe('floatToNumber', () => {
	test(floatToNumberTest.message, () => {
		floatToNumberTest.data.forEach(({ input: { floatStr, mantissaLength }, output }) => {
			strict.equal(floatToNumber(floatStr, mantissaLength), output)
		})
	})
})
