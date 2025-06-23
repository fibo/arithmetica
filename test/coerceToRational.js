import { strict } from 'node:assert'
import { test } from 'node:test'
import { coerceToRational } from 'arithmetica'

test('util: `coerceToRational`', () => {
	[
		{ input: 0.1, output: '0.1' },
	].forEach(({ input, output }) => {
		strict.equal(coerceToRational(input), output)
	})
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
