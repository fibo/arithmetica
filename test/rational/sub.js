import { strict } from 'node:assert'
import { test } from 'node:test'
import { sub } from '#src/rational.js'
import { subFloatTestData } from '#test/float/sub.js'

	test('Rational subtraction', () => {
		[
		{ input: { a: '0._1', b: '0._1' }, output: '0' },
			{ input: { a: '1', b: '0._1' }, output: '0._8' },
			...subFloatTestData
		].forEach(({ input: { a, b }, output }) => {
			strict.equal(sub(a, b), output)
		})
	})
