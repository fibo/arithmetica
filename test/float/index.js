import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import {
	// operators
	add, div, eq, inv, mul, neg, sub, lt, gt,
	// type-guards
	isFloat,
	// utils
	coerceToFloat, floatToNumber
} from 'arithmetica/float'

describe('arithmetica index', () => {
	test('exports operators', () => {
		assert.ok(typeof eq === 'function')
		assert.ok(typeof neg === 'function')
		assert.ok(typeof inv === 'function')
		assert.ok(typeof add === 'function')
		assert.ok(typeof div === 'function')
		assert.ok(typeof mul === 'function')
		assert.ok(typeof sub === 'function')
		assert.ok(typeof lt === 'function')
		assert.ok(typeof gt === 'function')
	})

	test('exports type-guards', () => {
		assert.ok(typeof isFloat === 'function')
	})

	test('exports utils', () => {
		assert.ok(typeof coerceToFloat === 'function')
		assert.ok(typeof floatToNumber === 'function')
	})
})
