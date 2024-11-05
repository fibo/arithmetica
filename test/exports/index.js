import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import {
	// operators
	add, div, eq, inv, mul, neg, sub, lt, gt,
	// type-guards
	isRational,
	// utils
	rationalToNumber
} from 'arithmetica'

describe('arithmetica default export', () => {
	test('exports operators', () => {
		strict.ok(typeof eq === 'function')
		strict.ok(typeof neg === 'function')
		strict.ok(typeof inv === 'function')
		strict.ok(typeof add === 'function')
		strict.ok(typeof div === 'function')
		strict.ok(typeof mul === 'function')
		strict.ok(typeof sub === 'function')
		strict.ok(typeof lt === 'function')
		strict.ok(typeof gt === 'function')
	})

	test('exports type-guards', () => {
		strict.ok(typeof isRational === 'function')
	})

	test('exports utils', () => {
		strict.ok(typeof rationalToNumber === 'function')
	})
})
