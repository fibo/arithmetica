import { strict } from 'node:assert'
import { test } from 'node:test'
import { eq } from '#src/rational.js'
import { eqFloatTestData } from '#test/float/eq.js'

test('Rational equality', () => {
	[
		{ input: { a: '1', b: '0._9' }, output: true },
		{ input: { a: '1', b: '0' }, output: false },
		{ input: { a: '-2', b: '-1._9' }, output: true },
		{ input: { a: '0', b: '0' }, output: true },
		{ input: { a: '1', b: '1._0' }, output: true },
		{ input: { a: '1', b: '1.0' }, output: true },
		{ input: { a: '2', b: '1.0' }, output: false },
		{ input: { a: '-1', b: '-1.0' }, output: true },
		{ input: { a: '-1.000', b: '-1.0' }, output: true },
		...eqFloatTestData
	].forEach(({ input: { a, b }, output }) => {
		strict.equal(eq(a, b), output)
	})
})
