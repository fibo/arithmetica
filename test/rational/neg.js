import { strict } from 'node:assert'
import { test } from 'node:test'
import { neg } from 'arithmetica/rational.js'
import { negFloatTestData } from '#test/float/neg.js'

test('Rational negation', () => {
	[
		{ input: '0.12_34', output: '-0.12_34' },
		{ input: '-0.12_34', output: '0.12_34' },
		...negFloatTestData
	].forEach(({ input, output }) => {
		strict.equal(neg(input), output)
	})
})
