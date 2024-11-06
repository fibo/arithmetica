import { strict } from 'node:assert'
import { test } from 'node:test'
import { gt } from '#src/rational.js'

test('gt', () => {
	[
		{ input: { a: '1', b: '1' }, output: false },
		{ input: { a: '-2', b: '1' }, output: false },
		{ input: { a: '42', b: '24' }, output: true },
		{ input: { a: 42, b: '-24' }, output: true },
		{ input: { a: 2, b: '2._4' }, output: false },
		{ input: { a: '0.89', b: '0._8' }, output: true },
		{ input: { a: '-1.23', b: '-1.23_1' }, output: true }
	].forEach(({ input: { a, b }, output }) => {
		strict.equal(gt(a, b), output)
	})
})
