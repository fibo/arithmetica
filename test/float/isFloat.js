import { strict } from 'node:assert'
import { test } from 'node:test'
import { isFloat } from '#src/float.js'

export const isFloatTestData = [
	{ input: undefined, output: false },
	{ input: 42, output: true },
	{ input: Infinity, output: false },
	{ input: NaN, output: false },
	{ input: '1', output: true },
	{ input: '1.01', output: true },
	{ input: '1.0', output: true },
	{ input: '-123.456789', output: true },
	// Can omit integer part
	{ input: '.1', output: true },
	{ input: '.123', output: true },
	{ input: '.0', output: true },
	{ input: '.', output: false },
	{ input: '-.1', output: false },
	{ input: '.-1', output: false },
	// cannot be -0
	{ input: '-0', output: false },
	// must have a number after minus sign
	{ input: '-.1', output: false },
	{ input: '-.', output: false },
	// cannot have right padded zeros
	{ input: '00.1', output: false },
	{ input: '-00.1', output: false },
	// cannot end with a decimal separator
	{ input: '0.', output: false },
	{ input: '-123.', output: false },
	{ input: '1234.', output: false },
	// cannot have more than one decimal separator
	{ input: '-1..01', output: false },
	{ input: '1..0', output: false },
	{ input: '1.2.3', output: false },
	// can have a minus sign only at the beginning
	{ input: '-1', output: true },
	{ input: '-2.0', output: true },
	{ input: '1-', output: false },
	{ input: '-1.0-', output: false },
	{ input: '-1.23-4', output: false },
	{ input: '1.23-4', output: false },
	{ input: '123-4', output: false },
]

test('isFloat', () => {
	isFloatTestData.forEach(({ input, output }) => {
		strict.equal(isFloat(input), output)
	})
})
