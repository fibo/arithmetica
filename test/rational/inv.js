import { strict } from 'node:assert'
import { test } from 'node:test'
import { inv } from 'arithmetica/rational.js'
import { invFloatTestData, invFloatThrowsErrorTestData } from '#test/float/inv.js'

test('Rational inversion', () => {
	[
		{ input: '1._1', output: '0.9' },
		...invFloatTestData
	].forEach(({ input, output }) => {
		strict.equal(inv(input), output)
	})
})

test('Rational inversion throws if input is zero', () => {
	invFloatThrowsErrorTestData.forEach(({ input, error }) => {
		strict.throws(() => { inv(input) }, error)
	})
})
