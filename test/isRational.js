import { strict } from 'node:assert'
import { test } from 'node:test'
import { isRational } from 'arithmetica'

test('type guard `isRational`', () => {
	for (const { input, output } of [
		{ input: undefined, output: false },
		{ input: 42, output: false },
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
		// Must have a number after minus sign
		{ input: '-.1', output: false },
		{ input: '-.', output: false },
		// Can have a minus sign only at the beginning
		{ input: '-1', output: true },
		{ input: '-2.0', output: true },
		{ input: '1-', output: false },
		{ input: '-1.0-', output: false },
		{ input: '-1.23-4', output: false },
		{ input: '1.23-4', output: false },
		{ input: '123-4', output: false },
		// Repeating decimals
		{ input: '1._1', output: true },
		{ input: '._1', output: true },
		{ input: '0.12_34', output: true },
		{ input: '.12_34', output: true },
		{ input: '1.2_3', output: true },
		// Repeating decimals must be a positive number
		{ input: '1._-1', output: false },
		{ input: '1._x', output: false },
	])
		strict.equal(isRational(input), output, JSON.stringify({ input, output }))
})
