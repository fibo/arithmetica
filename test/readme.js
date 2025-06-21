import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { add, div, mul } from 'arithmetica'

describe('README', () => {
	test('Features', () => {
		assert.equal(add(0.1, 0.2), '0.3')
		assert.equal(mul(0.1, 0.2), '0.02')

		assert.equal(add('1', 2n), '3')

		assert.equal(div(1, 3), '0._3')
		assert.equal(add('0._3', 1), '1._3')
	})
})
