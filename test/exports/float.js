import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import {
	// operators
	add, div, eq, inv, mul, neg, sub,
	// type-guards
	isFloat,
	// utils
	floatToNumber
} from 'arithmetica/float'

describe('arithmetica/float export', () => {
	test('exports operators', () => {
		strict.ok(typeof eq === 'function')
		strict.ok(typeof neg === 'function')
		strict.ok(typeof inv === 'function')
		strict.ok(typeof add === 'function')
		strict.ok(typeof div === 'function')
		strict.ok(typeof mul === 'function')
		strict.ok(typeof sub === 'function')
	})

	test('exports type-guards', () => {
		strict.ok(typeof isFloat === 'function')
	})

	test('exports utils', () => {
		strict.ok(typeof floatToNumber === 'function')
	})
})
