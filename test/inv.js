import { strict } from 'node:assert'
import { test } from 'node:test'
import { inv } from 'arithmetica'

test('operator: inversion `inv`', () => {
	for (const { input, output } of [
		{ input: '1', output: '1' },
		{ input: '2', output: '0.5' },
		{ input: '1._1', output: '0.9' },
	])
		strict.equal(inv(input), output)
})

test('operator: `inversion` throws if input is zero', () => {
	for (const { input } of [
		{ input: '0' },
		{ input: 0 },
		{ input: 0n },
	])
		strict.throws(
			() => { inv(input) },
			{ name: 'RangeError', message: 'Division by zero' }
		)
})
