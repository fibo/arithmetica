import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import { sub } from '#src/rational.js'
import { subFloatTest } from '#test/float/sub.js'

const subRationalTest = {
	message: 'implements Rational subtraction',
	data: [
		{ input: { a: '0._1', b: '0._1' }, output: '0' },
		{ input: { a: '1', b: '0._1' }, output: '0._8' }
	]
}

describe('sub', () => {
	test(subRationalTest.message, () => {
		subRationalTest.data.forEach(({ input: { a, b }, output }) => {
			strict.equal(sub(a, b), output)
		})
	})

	test(subFloatTest.message, () => {
		subFloatTest.data.forEach(({ input: { a, b }, output }) => {
			strict.equal(sub(a, b), output)
		})
	})
})
