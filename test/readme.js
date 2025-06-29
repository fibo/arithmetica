import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import { add, div, mul, isRational } from 'arithmetica'

const { equal, ok } = strict

describe('README', () => {
	test('Features', () => {
		ok(isRational('1'))
		ok(isRational('-12'))
		ok(isRational('-1.23456789'))
		ok(isRational('0._6'))
		ok(isRational('1.23_456'))

		equal(add(0.1, 0.2), '0.3')
		equal(mul(0.1, 0.2), '0.02')

		equal(add('1', 2n), '3')

		equal(div(1, 3), '0._3')
		equal(add('0._3', 1), '1._3')
	})
})
