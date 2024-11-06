import { strict } from 'node:assert'
import { test } from 'node:test'
import { mul } from '#src/rational.js'
import { mulFloatTestData } from '#test/float/mul.js'

test('Rational multiplication', () => {
	[
		{ input: { a: '0._3', b: '0.3' }, output: '0.1' },
		{ input: { a: '0._3', b: '3' }, output: '1' },
		{ input: { a: '0._1', b: '0._1' }, output: '0._012345679' },
		{ input: { a: '0._1', b: '0' }, output: '0' },
		{ input: { a: '0', b: '0._1' }, output: '0' },
		{ input: { a: '-0._1', b: '0' }, output: '0' },
		{ input: { a: '0', b: '-0._1' }, output: '0' },
		{ input: { a: '0.12_34', b: '0' }, output: '0' },
		{ input: { a: '0', b: '0.12_34' }, output: '0' },
		{ input: { a: '-0.12_34', b: '0' }, output: '0' },
		{ input: { a: '0', b: '-0.12_34' }, output: '0' },
		{ input: { a: '0._1', b: '1' }, output: '0._1' },
		{ input: { a: '1', b: '0._1' }, output: '0._1' },
		{ input: { a: '-0._1', b: '1' }, output: '-0._1' },
		{ input: { a: '1', b: '-0._1' }, output: '-0._1' },
		{ input: { a: '0.12_34', b: '1' }, output: '0.12_34' },
		{ input: { a: '1', b: '0.12_34' }, output: '0.12_34' },
		{ input: { a: '-0.12_34', b: '1' }, output: '-0.12_34' },
		{ input: { a: '1', b: '-0.12_34' }, output: '-0.12_34' },
		...mulFloatTestData
	].forEach(({ input: { a, b }, output }) => {
		strict.equal(mul(a, b), output)
	})
})
