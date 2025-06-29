import { strict } from 'node:assert'
import { test } from 'node:test'
import { coerceToRational } from 'arithmetica'

test('util: `coerceToRational`', () => {
	for (const { input, output } of [
		{ input: 0.1, output: '0.1' },
		{ input: 3, output: '3' },
		{ input: 123456789000000n, output: '123456789000000' },
	])
		strict.equal(coerceToRational(input), output)
})

test('util: `coerceToRational` throws if argument is not valid', () => {
	for (const { input } of [
		{ input: Infinity },
	])
		strict.throws(
			() => { coerceToRational(input) },
			{ name: 'TypeError', message: /Cannot coerce/ }
		)
})
