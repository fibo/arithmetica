import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { gt } from '#float/operators.js'

export const gtFloatTest = {
	message: "implements Float 'greater then' operator",
	data: [
		{ input: { a: '1', b: '1' }, output: false },
		{ input: { a: '-2', b: '1' }, output: false },
		{ input: { a: '42', b: '24' }, output: true }
	]
}

describe('gt', () => {
	test(gtFloatTest.message, () => {
		gtFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(gt(a, b), output)
		})
	})
})
