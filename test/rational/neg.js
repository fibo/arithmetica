import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { neg } from '#rational/operators.js'
import { negFloatTest } from '#test/float/neg.js'

const negRationalTest = {
	message: 'implements Rational negation',
	data: [
		{ input: '0.12_34', output: '-0.12_34' },
		{ input: '-0.12_34', output: '0.12_34' }
	]
}

describe('neg', () => {
	test(negRationalTest.message, () => {
		negRationalTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output)
		})
	})

	test(negFloatTest.message, () => {
		negFloatTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output)
		})
	})
})
