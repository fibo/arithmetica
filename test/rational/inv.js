import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { inv } from '#rational/operators.js'
import { invFloatTest, invFloatThrowsRangeErrorTest } from '#test/float/inv.js'

const invRationalTest = {
	message: 'implements Rational inversion',
	data: [
		{ input: '1._1', output: '0.9' }
	]
}

describe('inv', () => {
	test(invRationalTest.message, () => {
		invRationalTest.data.forEach(({ input, output }) => {
			assert.equal(inv(input), output)
		})
	})

	test(invFloatThrowsRangeErrorTest.message, () => {
		invFloatThrowsRangeErrorTest.data.forEach(({ input, error }) => {
			assert.throws(() => { inv(input) }, error)
		})
	})

	test(invFloatTest.message, () => {
		invFloatTest.data.forEach(({ input, output }) => {
			assert.equal(inv(input), output)
		})
	})
})
