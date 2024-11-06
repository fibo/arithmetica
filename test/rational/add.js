import { strict } from 'node:assert'
import { test } from 'node:test'
import { add } from '#src/rational.js'
import { addFloatTestData } from '#test/float/add.js'

test('Rational addition', () => {
	[
		{ input: { a: '0._1', b: '0._8' }, output: '1' },
		{ input: { a: '0._1', b: '0._1' }, output: '0._2' },
		{ input: { a: '0._3', b: 1 }, output: '1._3' },
		...addFloatTestData
	].forEach(({ input: { a, b }, output }) => {
		strict.equal(add(a, b), output)
	})
})
