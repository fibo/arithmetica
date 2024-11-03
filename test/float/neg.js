import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { neg } from '#src/float.js'

export const negFloatTest = {
	message: 'implements Float negation operator',
	data: [
		{ input: '1', output: '-1' },
		{ input: '-42', output: '42' },
		{ input: '-1.23', output: '1.23' },
	]
}

describe('neg', () => {
	test(negFloatTest.message, () => {
		negFloatTest.data.forEach(({ input, output }) => {
			assert.equal(neg(input), output)
		})
	})
})
