import { strict } from 'node:assert'
import { test } from 'node:test'
import { div } from '#src/rational.js'
import { divFloatTestData, divFloatThrowsErrorTestData } from '#test/float/div.js'

test('Rational division', () => {
	[
		{ input: { a: '0._1', b: '0._1' }, output: '1' },
		{ input: { a: '0._3', b: '0._1' }, output: '3' },
		{ input: { a: '0.6', b: '1._2' }, output: '0.4_90' },
		{ input: { a: '1.3_8', b: '-2' }, output: '-0.69_4' },
		...divFloatTestData
	].forEach(({ input: { a, b }, output }) => {
		strict.equal(div(a, b), output)
	})
})

test('Rational division throws if second operand is zero', () => {
	divFloatThrowsErrorTestData.forEach(({ input: { a, b } }) => {
		strict.throws(() => { div(a, b) })
	})
})
