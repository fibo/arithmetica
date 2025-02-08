import { strict } from 'node:assert'
import { test } from 'node:test'
import { div } from 'arithmetica/float.js'

export const divFloatTestData = [
	{ input: { a: '1', b: '1' }, output: '1' },
	{ input: { a: '8', b: '16' }, output: '0.5' },
	{ input: { a: '-10', b: '2' }, output: '-5' },
	{ input: { a: '144', b: '12' }, output: '12' },
	{ input: { a: '14.4', b: '1.2' }, output: '12' },
	{ input: { a: '100.0', b: '2.0' }, output: '50' },
	{ input: { a: '1', b: '2' }, output: '0.5' },
	{ input: { a: '3', b: '2' }, output: '1.5' },
	{ input: { a: '234', b: '25' }, output: '9.36' },
	{ input: { a: '1', b: '-0.0001' }, output: '-10000' },
	{ input: { a: '0', b: '11.111111111' }, output: '0' },
	{ input: { a: '98463.7', b: '51.2' }, output: '1923.119140625' },
	{ input: { a: 1, b: '1' }, output: '1' },
]

test('Float division', () => {
	divFloatTestData.forEach(({ input: { a, b }, output }) => {
		strict.equal(div(a, b), output)
	})
})

export const divFloatThrowsErrorTestData = [
	{ input: { a: '1', b: '0' } },
	{ input: { a: '1', b: 0 } },
	{ input: { a: 1, b: 0 } },
	{ input: { a: 1, b: 0n } },
]

test('Float division throws if second operand is zero', () => {
	divFloatThrowsErrorTestData.forEach(({ input: { a, b } }) => {
		strict.throws(() => { div(a, b) })
	})
})
