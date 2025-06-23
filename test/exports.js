import { strict } from 'node:assert'
import { test } from 'node:test'
import {
	// operators
	add, div, eq, inv, mul, neg, sub, lt, gt,
	// utils
	coerceToRational,
	isRational,
	rationalToNumber,
} from 'arithmetica'

test('arithmetica exports', () => {
	// operators
	strict.ok(typeof eq === 'function')
	strict.ok(typeof neg === 'function')
	strict.ok(typeof inv === 'function')
	strict.ok(typeof add === 'function')
	strict.ok(typeof div === 'function')
	strict.ok(typeof mul === 'function')
	strict.ok(typeof sub === 'function')
	strict.ok(typeof lt === 'function')
	strict.ok(typeof gt === 'function')

	// utils
	strict.ok(typeof coerceToRational === 'function')
	strict.ok(typeof isRational === 'function')
	strict.ok(typeof rationalToNumber === 'function')
})
