import { strict } from 'node:assert'
import { test } from 'node:test'
import { lt } from '#src/rational.js'

const testData = [
	{ input: { a: '1', b: '1' }, output: false },
	{ input: { a: '-2', b: '1' }, output: true },
	{ input: { a: '2.5', b: '-5.2' }, output: false },
	{ input: { a: 2, b: '-5' }, output: false },
	{ input: { a: -2, b: '-1' }, output: true },
	{ input: { a: '0._8', b: '1' }, output: true },
	{ input: { a: '-0._9', b: '-1' }, output: false },
]

test('lt', () => {
	testData.forEach(({ input: { a, b }, output }) => {
		strict.equal(lt(a, b), output)
	})
})
