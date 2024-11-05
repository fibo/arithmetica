import { strict } from 'node:assert'
import { describe, test } from 'node:test'
import { div } from '#src/rational.js'
import { divFloatTest, divFloatThrowsRangeErrorTest } from '#test/float/div.js'

const divRationalTest = {
	message: 'implements Rational division',
	data: [
		{ input: { a: '0._1', b: '0._1' }, output: '1' },
		{ input: { a: '0._3', b: '0._1' }, output: '3' },
		{ input: { a: '0.6', b: '1._2' }, output: '0.4_90' },
		{ input: { a: '1.3_8', b: '-2' }, output: '-0.69_4' },
	]
}

describe('div', () => {
	test(divFloatTest.message, () => {
		divFloatTest.data.forEach(({ input: { a, b }, output }) => {
			strict.equal(div(a, b), output)
		})
	})

	test(divRationalTest.message, () => {
		divRationalTest.data.forEach(({ input: { a, b }, output }) => {
			strict.equal(div(a, b), output)
		})
	})

	test(divFloatThrowsRangeErrorTest.message, () => {
		divFloatThrowsRangeErrorTest.data.forEach(({ input: { a, b } }) => {
			strict.throws(() => { div(a, b) })
		})
	})

	test(divFloatTest.message, () => {
		divFloatTest.data.forEach(({ input: { a, b }, output }) => {
			strict.equal(div(a, b), output)
		})
	})
})
