import { strict } from 'node:assert'
import { test } from 'node:test'
import { isRational } from 'arithmetica/rational.js'
import { isFloatTestData } from '#test/float/isFloat.js'

test('isRational', () => {
	[
		{ input: '1._1', output: true },
		{ input: '._1', output: true },
		{ input: '0.12_34', output: true },
		{ input: '.12_34', output: true },
		{ input: '1.2_3', output: true },
		...isFloatTestData
	].forEach(({ input, output }) => {
		strict.equal(isRational(input), output)
	})
})
